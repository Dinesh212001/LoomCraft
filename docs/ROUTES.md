# All API routes

Planned routes (the plan). Code lives in `backend/src/routes/customer/` and `backend/src/routes/admin/`, mounted in `routes/index.js`.

Access: **Public** = no login, **Customer** = customer login, **Admin** = admin login.

Total **73 routes**. Built: **1** (`GET /api/home`). Everything else is not built yet (404) until its owner builds it. When you build a route, change its status here.


# Customer site  (/api)


### home

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/home` | Public | Dev 1 | Home page data: categories, featured, new arrivals, popular, offers | ✅ Built |

### about

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/about` | Public | Unassigned | About Us content (story, contact, store details) | ⏳ Todo |

### auth

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/auth/register` | Public | Dev 2 | Customer registration | ⏳ Todo |
| POST | `/api/auth/login` | Public | Dev 2 | Customer login (sets httpOnly cookie) | ⏳ Todo |
| POST | `/api/auth/logout` | Public | Dev 2 | Logout (clear cookie) | ⏳ Todo |
| GET | `/api/auth/me` | Customer | Dev 2 | Logged-in customer details | ⏳ Todo |

### profile

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| PUT | `/api/profile` | Customer | Dev 2 | Update profile (name, phone) | ⏳ Todo |
| PUT | `/api/profile/password` | Customer | Dev 2 | Change password | ⏳ Todo |

### addresses

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/addresses` | Customer | Dev 2 | My address book | ⏳ Todo |
| POST | `/api/addresses` | Customer | Dev 2 | Add address | ⏳ Todo |
| PUT | `/api/addresses/:id` | Customer | Dev 2 | Edit address | ⏳ Todo |
| DELETE | `/api/addresses/:id` | Customer | Dev 2 | Delete address | ⏳ Todo |

### categories

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/categories` | Public | Dev 1 | All categories (6 standard) | ⏳ Todo |

### products

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/products` | Public | Dev 1 | List: search, filters (category, fabric, price, colour, weave, stock), sort, page | ⏳ Todo |
| GET | `/api/products/:slug` | Public | Dev 1 | Product details (images, fabric, weave, variants, stock) | ⏳ Todo |
| GET | `/api/products/:id/reviews` | Public | Dev 2 | Reviews of a product | ⏳ Todo |

### reviews

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/reviews` | Customer | Dev 2 | Add review (only for DELIVERED purchase) | ⏳ Todo |

### wishlist

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/wishlist` | Customer | Dev 3 | My wishlist | ⏳ Todo |
| POST | `/api/wishlist/:productId` | Customer | Dev 3 | Add to wishlist | ⏳ Todo |
| DELETE | `/api/wishlist/:productId` | Customer | Dev 3 | Remove from wishlist | ⏳ Todo |

### cart

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/cart` | Customer | Dev 3 | My cart: subtotal, delivery, discount, total, stock check | ⏳ Todo |
| POST | `/api/cart/items` | Customer | Dev 3 | Add variant to cart | ⏳ Todo |
| PATCH | `/api/cart/items/:id` | Customer | Dev 3 | Change quantity | ⏳ Todo |
| DELETE | `/api/cart/items/:id` | Customer | Dev 3 | Remove item | ⏳ Todo |

### coupons

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/coupons/validate` | Customer | Dev 3 | Check a coupon code for my cart | ⏳ Todo |

### orders

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/orders` | Customer | Dev 3 | Checkout: create order (unique order number, price snapshot) | ⏳ Todo |
| GET | `/api/orders` | Customer | Dev 3 | My orders | ⏳ Todo |
| GET | `/api/orders/:id` | Customer | Dev 3 | Order details + tracking status | ⏳ Todo |
| POST | `/api/orders/:id/cancel` | Customer | Dev 3 | Cancel order (policy check) | ⏳ Todo |

### returns

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/returns` | Customer | Dev 3 | Request return / exchange (policy window) | ⏳ Todo |
| GET | `/api/returns` | Customer | Dev 3 | My return / exchange requests | ⏳ Todo |

### payments

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/payments/webhook` | Public | Dev 3 | Razorpay webhook (verify signature, then mark PAID) | ⏳ Todo |
| POST | `/api/payments/create-order` | Customer | Dev 3 | Create Razorpay order for my order | ⏳ Todo |
| POST | `/api/payments/verify` | Customer | Dev 3 | Verify payment on BACKEND, then mark PAID | ⏳ Todo |

# Admin portal  (/api/admin)


### auth

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| POST | `/api/admin/auth/login` | Public | Dev 2 | Admin login | ⏳ Todo |
| POST | `/api/admin/auth/logout` | Admin | Dev 2 | Admin logout | ⏳ Todo |
| GET | `/api/admin/auth/me` | Admin | Dev 2 | Logged-in admin details | ⏳ Todo |

### dashboard

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/dashboard` | Admin | Dev 4 | Totals (products, customers, orders, sales), recent orders, low-stock alerts | ⏳ Todo |

### categories

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/categories` | Admin | Dev 1 | All categories | ⏳ Todo |
| POST | `/api/admin/categories` | Admin | Dev 1 | Add category | ⏳ Todo |
| PUT | `/api/admin/categories/:id` | Admin | Dev 1 | Edit category | ⏳ Todo |
| DELETE | `/api/admin/categories/:id` | Admin | Dev 1 | Delete category | ⏳ Todo |

### products

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/products` | Admin | Dev 1 | All products (including hidden) | ⏳ Todo |
| POST | `/api/admin/products` | Admin | Dev 1 | Add product | ⏳ Todo |
| GET | `/api/admin/products/:id` | Admin | Dev 1 | One product (for edit page) | ⏳ Todo |
| PUT | `/api/admin/products/:id` | Admin | Dev 1 | Update details, description, price, discount | ⏳ Todo |
| PATCH | `/api/admin/products/:id/visibility` | Admin | Dev 1 | Show / hide product | ⏳ Todo |
| DELETE | `/api/admin/products/:id` | Admin | Dev 1 | Delete product | ⏳ Todo |
| POST | `/api/admin/products/:id/images` | Admin | Dev 1 | Upload product image | ⏳ Todo |
| DELETE | `/api/admin/products/:id/images/:imageId` | Admin | Dev 1 | Remove / replace image | ⏳ Todo |
| POST | `/api/admin/products/:id/variants` | Admin | Dev 1 | Add variant (colour, size, price, SKU) | ⏳ Todo |
| PUT | `/api/admin/products/:id/variants/:variantId` | Admin | Dev 1 | Update variant | ⏳ Todo |
| DELETE | `/api/admin/products/:id/variants/:variantId` | Admin | Dev 1 | Delete variant | ⏳ Todo |

### inventory

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/inventory` | Admin | Dev 4 | All stock levels (available / out of stock) | ⏳ Todo |
| GET | `/api/admin/inventory/low-stock` | Admin | Dev 4 | Low-stock alerts | ⏳ Todo |
| PATCH | `/api/admin/inventory/:variantId` | Admin | Dev 4 | Adjust quantity / low-stock threshold | ⏳ Todo |

### orders

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/orders` | Admin | Dev 3 | All orders (filter by status) | ⏳ Todo |
| GET | `/api/admin/orders/:id` | Admin | Dev 3 | Order details | ⏳ Todo |
| PATCH | `/api/admin/orders/:id/status` | Admin | Dev 3 | Confirm > Process > Ship > Out for delivery > Delivered (no skipping) | ⏳ Todo |

### returns

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/returns` | Admin | Dev 3 | All return / exchange / cancellation requests | ⏳ Todo |
| PATCH | `/api/admin/returns/:id` | Admin | Dev 3 | Approve / reject / complete | ⏳ Todo |

### customers

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/customers` | Admin | Dev 2 | Customer directory | ⏳ Todo |
| GET | `/api/admin/customers/:id` | Admin | Dev 2 | Customer details + order history | ⏳ Todo |

### coupons

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/coupons` | Admin | Dev 3 | All coupons | ⏳ Todo |
| POST | `/api/admin/coupons` | Admin | Dev 3 | Create coupon (validity dates, usage limit, rules) | ⏳ Todo |
| PUT | `/api/admin/coupons/:id` | Admin | Dev 3 | Edit coupon | ⏳ Todo |
| PATCH | `/api/admin/coupons/:id/deactivate` | Admin | Dev 3 | Deactivate coupon | ⏳ Todo |

### reviews

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/reviews` | Admin | Dev 2 | All reviews | ⏳ Todo |
| DELETE | `/api/admin/reviews/:id` | Admin | Dev 2 | Remove policy-violating review | ⏳ Todo |

### reports

| Method | URL | Access | Owner | What it does | Status |
|---|---|---|---|---|---|
| GET | `/api/admin/reports/sales` | Admin | Dev 4 | Sales report | ⏳ Todo |
| GET | `/api/admin/reports/orders` | Admin | Dev 4 | Order report | ⏳ Todo |
| GET | `/api/admin/reports/inventory` | Admin | Dev 4 | Inventory report | ⏳ Todo |
| GET | `/api/admin/reports/products` | Admin | Dev 4 | Product performance | ⏳ Todo |


## Response format (everyone follows it, helpers are in `utils/apiResponse.js`)
```json
{ "success": true,  "message": "OK", "data": { } }
{ "success": false, "message": "Cannot move PENDING -> SHIPPED" }
```

## Rules from the client document
- Stock decreases ONLY when an order becomes CONFIRMED. Stock 0 = Out of Stock, ordering blocked.
- Order status: PENDING > CONFIRMED > PROCESSING > SHIPPED > OUT_FOR_DELIVERY > DELIVERED (or CANCELLED). No skipping (`constants/orderStatus.js`).
- Online order is PAID only after BACKEND payment verification.
- Never store card / UPI details.
- Only ADMIN changes images, prices, discounts, inventory.
- Review only for a DELIVERED purchase. Return / exchange / cancel only inside the store policy window.
