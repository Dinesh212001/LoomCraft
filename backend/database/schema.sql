-- Handloom Store: 17 tables (Handloom Requirement Document)
-- Run: npm run db:init
-- Pudhu maatram venum na database/migrations/ la 001_xxx.sql file ezhuthi: npm run db:run -- database/migrations/001_xxx.sql

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1
CREATE TABLE IF NOT EXISTS admins (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE,
  password   TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2
CREATE TABLE IF NOT EXISTS customers (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE,
  phone      TEXT,
  password   TEXT NOT NULL,
  is_active  BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 3
CREATE TABLE IF NOT EXISTS categories (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name      TEXT NOT NULL UNIQUE,
  slug      TEXT NOT NULL UNIQUE,
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- 4
CREATE TABLE IF NOT EXISTS products (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name              TEXT NOT NULL,
  slug              TEXT NOT NULL UNIQUE,
  description       TEXT,
  category_id       UUID NOT NULL REFERENCES categories(id),
  fabric_type       TEXT NOT NULL,            -- Silk / Cotton / Linen
  weaving_technique TEXT,
  color             TEXT,
  design_pattern    TEXT,
  dimensions        TEXT,
  has_blouse_piece  BOOLEAN NOT NULL DEFAULT false,
  care_instructions TEXT,
  price             NUMERIC(10,2) NOT NULL,
  discount_percent  INT NOT NULL DEFAULT 0,
  is_active         BOOLEAN NOT NULL DEFAULT true,   -- visibility toggle
  is_featured       BOOLEAN NOT NULL DEFAULT false,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);

-- 5
CREATE TABLE IF NOT EXISTS product_images (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url        TEXT NOT NULL,
  position   INT NOT NULL DEFAULT 0
);

-- 6
CREATE TABLE IF NOT EXISTS product_variants (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id     UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  color          TEXT,
  size           TEXT,
  sku            TEXT UNIQUE,
  price_override NUMERIC(10,2)
);

-- 7  (quantity 0 aana "Out of Stock")
CREATE TABLE IF NOT EXISTS inventory (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id          UUID NOT NULL UNIQUE REFERENCES products(id) ON DELETE CASCADE,
  quantity            INT NOT NULL DEFAULT 0 CHECK (quantity >= 0),
  low_stock_threshold INT NOT NULL DEFAULT 5,
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 8
CREATE TABLE IF NOT EXISTS wishlist (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (customer_id, product_id)
);

-- 9
CREATE TABLE IF NOT EXISTS carts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL UNIQUE REFERENCES customers(id) ON DELETE CASCADE,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 10
CREATE TABLE IF NOT EXISTS cart_items (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  cart_id    UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id),
  variant_id UUID REFERENCES product_variants(id),
  quantity   INT NOT NULL DEFAULT 1 CHECK (quantity > 0)
);
CREATE INDEX IF NOT EXISTS idx_cart_items_cart ON cart_items(cart_id);

-- 11
CREATE TABLE IF NOT EXISTS addresses (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
  full_name   TEXT NOT NULL,
  phone       TEXT NOT NULL,
  line1       TEXT NOT NULL,
  line2       TEXT,
  city        TEXT NOT NULL,
  state       TEXT NOT NULL,
  pincode     TEXT NOT NULL,
  is_default  BOOLEAN NOT NULL DEFAULT false
);

-- 15 (orders la reference aagum, so munnadi create)
CREATE TABLE IF NOT EXISTS coupons (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code               TEXT NOT NULL UNIQUE,
  description        TEXT,
  discount_type      TEXT NOT NULL CHECK (discount_type IN ('PERCENT', 'FLAT')),
  discount_value     NUMERIC(10,2) NOT NULL,
  min_order_amount   NUMERIC(10,2),
  max_uses           INT,
  used_count         INT NOT NULL DEFAULT 0,
  per_customer_limit INT,
  valid_from         TIMESTAMPTZ NOT NULL,
  valid_to           TIMESTAMPTZ NOT NULL,
  is_active          BOOLEAN NOT NULL DEFAULT true
);

-- 12
CREATE TABLE IF NOT EXISTS orders (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_number    TEXT NOT NULL UNIQUE,          -- unique order ID, e.g. HL-2026-000123
  customer_id     UUID NOT NULL REFERENCES customers(id),
  address_id      UUID NOT NULL REFERENCES addresses(id),
  coupon_id       UUID REFERENCES coupons(id),
  status          TEXT NOT NULL DEFAULT 'PENDING'
                  CHECK (status IN ('PENDING','CONFIRMED','PROCESSING','SHIPPED','OUT_FOR_DELIVERY','DELIVERED','CANCELLED')),
  subtotal        NUMERIC(10,2) NOT NULL,
  delivery_charge NUMERIC(10,2) NOT NULL DEFAULT 0,
  discount_amount NUMERIC(10,2) NOT NULL DEFAULT 0,
  total           NUMERIC(10,2) NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- 13
CREATE TABLE IF NOT EXISTS order_items (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id     UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id   UUID NOT NULL REFERENCES products(id),
  variant_id   UUID REFERENCES product_variants(id),
  product_name TEXT NOT NULL,                    -- snapshot
  price        NUMERIC(10,2) NOT NULL,           -- snapshot (discount apply aana price)
  quantity     INT NOT NULL CHECK (quantity > 0)
);

-- 14  (card / sensitive payment details store pannathinga)
CREATE TABLE IF NOT EXISTS payments (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id           UUID NOT NULL UNIQUE REFERENCES orders(id) ON DELETE CASCADE,
  method             TEXT NOT NULL CHECK (method IN ('COD', 'ONLINE')),
  status             TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','PAID','FAILED','REFUNDED')),
  amount             NUMERIC(10,2) NOT NULL,
  gateway_order_id   TEXT,
  gateway_payment_id TEXT,
  paid_at            TIMESTAMPTZ,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 16  (completed purchase ku mattum review)
CREATE TABLE IF NOT EXISTS reviews (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id  UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  customer_id UUID NOT NULL REFERENCES customers(id),
  order_id    UUID NOT NULL REFERENCES orders(id),
  rating      INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  comment     TEXT,
  is_removed  BOOLEAN NOT NULL DEFAULT false,    -- admin policy violation remove
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (product_id, customer_id, order_id)
);

-- 17
CREATE TABLE IF NOT EXISTS returns (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id      UUID NOT NULL REFERENCES orders(id),
  order_item_id UUID REFERENCES order_items(id),
  customer_id   UUID NOT NULL REFERENCES customers(id),
  type          TEXT NOT NULL CHECK (type IN ('CANCELLATION', 'RETURN', 'EXCHANGE')),
  reason        TEXT NOT NULL,
  status        TEXT NOT NULL DEFAULT 'REQUESTED' CHECK (status IN ('REQUESTED','APPROVED','REJECTED','COMPLETED')),
  admin_note    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);
