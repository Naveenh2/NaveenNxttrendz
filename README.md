# NxtTrendz 🛍️

A full-featured e-commerce web application built with **React.js**, inspired by popular shopping platforms. It includes authentication, product browsing with filters, product detail pages, and a fully functional shopping cart.

---

## 🔗 Live Demo

[View Live App](https://naveenNxttrendz.ccbp.tech)

---

## 📸 Screenshots

| Login | Products | Cart |
|-------|----------|------|
| Authenticated login with JWT | Browse & filter products | Manage cart items |

---

## ✨ Features

### 🔐 Authentication
- JWT-based login and logout
- Protected routes — unauthenticated users are redirected to `/login`
- Persistent login via cookies

### 🛒 Products Page
- Fetches products from REST API with JWT token
- **Search** by product title (on Enter key)
- **Filter by Category** — Clothing, Electronics, Appliances, Grocery, Toys
- **Filter by Rating** — 4★ and above, 3★ and above, etc.
- **Sort by Price** — High to Low / Low to High
- Multiple filters work together simultaneously
- **Clear Filters** resets all filters and re-fetches
- Loader shown during API calls
- **No Products Found** view when filters return empty results
- **Failure View** shown on API errors

### 📦 Product Details Page
- Detailed view with image, price, rating, description, availability, brand
- Quantity selector (increment / decrement)
- **Add to Cart** button
- Similar products section
- **Product Not Found** error view for invalid product IDs

### 🛍️ Cart Page
- Add items from product detail page
- **Update quantity** directly in cart (+ / -)
- Removing an item when quantity reaches 0
- **Remove individual items** with ✕ button
- **Order Total** calculated dynamically
- **Items count** displayed
- **Empty Cart** view when no items
- Checkout button

### 🔔 Prime Deals Section
- Exclusive deals fetched from a separate API
- Shown only to authenticated users
- Failure banner shown for non-prime users

---

## 🧱 Component Structure

```
src/
├── components/
│   ├── Header/              # Nav bar with links and logout
│   ├── Home/                # Home page with Prime Deals
│   ├── PrimeDealsSection/   # Exclusive deals section
│   ├── Products/            # Products page layout
│   ├── AllProductsSection/  # Products grid with all filters
│   ├── ProductsHeader/      # Sort dropdown + heading
│   ├── FiltersGroup/        # Search, Category & Rating filters
│   ├── ProductCard/         # Individual product card
│   ├── ProductItemDetails/  # Product detail page
│   ├── SimilarProductItem/  # Similar product card
│   ├── Cart/                # Cart page
│   ├── CartListView/        # Cart items list + Order Total
│   ├── CartItem/            # Individual cart item with controls
│   ├── EmptyCartView/       # Empty cart state
│   ├── LoginForm/           # Login page
│   ├── ProtectedRoute/      # Route guard for auth
│   └── NotFound/            # 404 page
├── context/
│   └── CartContext.js       # React Context for cart state
└── App.js                   # Routes + Cart state management
```

---

## 🚀 Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend UI library |
| React Router v5 | Client-side routing |
| React Context API | Global cart state management |
| JavaScript (ES6+) | Application logic |
| CSS3 + Media Queries | Styling and responsive design |
| js-cookie | JWT token management |
| react-loader-spinner | Loading indicators |
| react-icons | UI icons (BsDashSquare, BsPlusSquare, etc.) |
| REST API (ccbp.in) | Products, Prime Deals, Auth |

---

## 📡 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `https://apis.ccbp.in/login` | POST | User authentication |
| `https://apis.ccbp.in/products` | GET | Fetch all products with filters |
| `https://apis.ccbp.in/products/:id` | GET | Fetch single product details |
| `https://apis.ccbp.in/prime-deals` | GET | Fetch exclusive prime deals |

### Products API Query Parameters
```
https://apis.ccbp.in/products?sort_by=PRICE_HIGH&category=2&title_search=shirt&rating=4
```

| Parameter | Description |
|---|---|
| `sort_by` | `PRICE_HIGH` or `PRICE_LOW` |
| `category` | Category ID (1–5) |
| `title_search` | Search keyword |
| `rating` | Minimum rating (1–4) |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js >= 14
- npm >= 6

### Installation

```bash
# Clone the repository
git clone https://github.com/Naveenh2/NaveenNxttrendz.git

# Navigate into the project
cd NaveenNxttrendz

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at `http://localhost:3000`

### Login Credentials (Test)
```
Username: rahul
Password: rahul@2021
```

---

## 📁 Key Implementation Details

### Cart State Management (React Context)
Cart state lives in `App.js` and is shared via `CartContext.Provider`:
- `addCartItem` — adds item or increases quantity if already in cart
- `deleteCartItem` — removes item by ID
- `updateCartItemQuantity` — increments or decrements quantity
- `removeAllCartItems` — clears the entire cart

### Protected Routes
All routes except `/login` are wrapped in `ProtectedRoute` which checks for a valid JWT cookie and redirects to `/login` if not found.

---

## 🗂️ Git & Deployment

```bash
# Add changes
git add .

# Commit
git commit -m "your message"

# Push to GitHub
git push origin master
```

---

## 👤 Author

**Naveen Reddy**
- GitHub: [@Naveenh2](https://github.com/Naveenh2)

---

## 📄 License

This project is for educational purposes as part of the **NxtWave CCBP 4.0** React.js curriculum.