# Epadi work aagum

## 1. Rendu portal, ore backend

```
 Customer site  (localhost:3000/)        \
                                           >---> ONE backend (localhost:5000/api) ---> PostgreSQL
 Admin portal   (localhost:3000/admin)   /
```
Frontend DB-a direct-a touch pannaadhu. Backend mattum DB-kooda pesum.

## 2. Ippo ready-a irukkadhu / illadhadhu

| Part | Ready | Team build pannanum |
|---|---|---|
| Backend plumbing | server, app, config, middlewares (login + role guard), utils (jwt, apiResponse), constants | - |
| **Backend module** | **Home** (model + service + controller) = **example** | Ellaa matha modules |
| Routes | **72 routes ellam** `routes/index.js` la (Home mattum work aagum, matha 501) | Placeholder-a controller-oda connect pannanum |
| Database | 17 tables (`schema.sql`) + sample data | - |
| Web Home | Home page + Navbar + Footer + product card | - |
| Web Admin | Login page (UI), layout (sidebar, topbar, footer), dashboard (basic) | Real data, matha admin pages |
| Web matha pages | - | Catalogue, details, cart, checkout, orders, admin products... |

## 3. Backend 4 layer: Routes -> Controller -> Service -> Model

Home-a example-a paarunga (`GET /api/home`):

```
routes/index.js                          homeRoutes.get('/', homeController.get)
  -> controllers/customer/home.controller.js   req edukkum, service call pannum, ok(res, data) anuppum
  -> services/home.service.js                  logic (final price, 5 lists onnu serthu)
  -> models/product.model.js, category.model.js   SQL mattum
```

| Layer | Velai | Rule |
|---|---|---|
| Routes | URL -> controller, login/role guard | logic illa |
| Controller | request / response | logic illa, SQL illa |
| Service | business rules | SQL illa |
| Model | SQL queries | `$1, $2` parameters, string join venam |

`services/` and `models/` customer / admin rendukum **shared**. `controllers/` customer / admin thani folder.

## 3a. Neenga build panna, file create pannuradhu (learn by doing)

Folders already irukku. Neenga file create pannanum. Names follow:

| Layer | File name |
|---|---|
| Model | `models/cart.model.js` |
| Service | `services/cart.service.js` |
| Controller | `controllers/customer/cart.controller.js` (admin na `controllers/admin/...`) |
| Route | `routes/index.js` la `todo(...)` -a maathunga |

Example: **GET /api/categories** (first exercise, `category.model.js` la `findActive` already irukku)
1. `services/category.service.js` -> `findActive` call pannunga
2. `controllers/customer/category.controller.js` -> `ok(res, data)`
3. `routes/index.js`:
```js
const categoryController = require('../controllers/customer/category.controller');
categoriesRoutes.get('/', categoryController.list);   // todo(...) delete
```
4. Test: http://localhost:5000/api/categories
5. `docs/ROUTES.md` la status ✅ Built

## 4. Login

`middlewares/auth.middleware.js` token check pannum (cookie `token` or `Authorization: Bearer`), `role.middleware.js` role check pannum.
Token payload `{ id, role }`, role = `CUSTOMER` or `ADMIN` (`utils/jwt.js`).
Dev 2 login build pannumbodhu `signToken({ id, role })` use panni cookie set pannanum.

## 5. Frontend (web/)

```
web/src/
├── app/
│   ├── (shop)/        customer pages. layout (Navbar + Footer) + page.tsx = Home
│   └── admin/
│       ├── login/     admin login (own page, no sidebar)
│       └── (panel)/   admin pages with sidebar: layout.tsx + page.tsx = Dashboard
├── components/        layout/  home/  product/  admin/      (neenga pudhu folder add pannalam: cart/, ui/ ...)
├── services/          home.service.ts = backend API call functions
├── lib/api.ts         ella API call-um inga irundhu pogum
├── types/             TypeScript types
├── hooks/  store/     empty, team use pannum
```
Ovvoru backend module-kum `services/x.service.ts` create pannunga (example: `products.service.ts`).
Pudhu page: `app/(shop)/products/page.tsx` create panna `/products` URL work aagum (Next.js folder = URL).

## 6. DB maatha
- Muthal thadava: `npm run db:init`, `npm run seed:admin`, `npm run seed:sample`
- Pudhu column / table: `database/migrations/001_xxx.sql` ezhudhi `npm run db:run -- database/migrations/001_xxx.sql`, commit pannunga, team-ku solunga.

## 7. Team split

| Dev | Module |
|---|---|
| Dev 1 | categories, products (+ images, variants), catalogue pages, admin products / categories |
| Dev 2 | auth (customer + admin), profile, addresses, customers (admin), reviews |
| Dev 3 | cart, wishlist, coupons, orders, returns, payments |
| Dev 4 | inventory, dashboard, reports |
