# 📚 BookNest: Where Stories Nestle

BookNest is a full-featured **online bookstore application** built with the MERN stack. It supports three types of users: **Users**, **Sellers**, and **Admins**. Each user type has its own dashboard, functionalities, and flow — making BookNest a versatile platform for both book lovers and vendors.

---

## ✨ Features

### 👥 User
- 🔐 User Authentication (Signup/Login)
- 📚 Browse, search, and filter books
- 🛒 Add books to cart and place orders
- 💖 Wishlist functionality
- 📦 Order tracking and history

### 🛍️ Seller
- 🔐 Seller Authentication
- ➕ Add, edit, delete books
- 📊 Dashboard with order and product statistics
- 📦 View orders received from users

### 🛡️ Admin
- 🔐 Admin Authentication
- 👤 Manage users and sellers (view/delete)
- 🗂️ View listed books and platform data

---

## 🛠️ Tech Stack

**Frontend**:
- React.js
- React Router DOM
- Axios
- Bootstrap + Custom CSS

**Backend**:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Multer (Image Uploads)
- CORS & JWT (optional for production)

---

## 📁 Folder Structure

BookNest/
├── client/ # Frontend (React)
│ ├── public/ # Static assets and index.html
│ ├── src/
│ │ ├── Admin/ # Admin login, dashboard, users, sellers
│ │ ├── Seller/ # Seller login, dashboard, add/view books, orders
│ │ ├── User/ # User login, signup, browse books, cart, wishlist
│ │ ├── Components/ # Shared components like Navbar, Footer
│ │ ├── App.jsx # All route definitions
│ │ ├── main.jsx # Entry point
│ │ └── assets/ # Images, logos, etc.
│ ├── .env # Frontend environment variables
│ ├── package.json # Frontend dependencies
│ └── vite.config.js # Vite configuration
│
├── server/ # Backend (Node.js + Express)
│ ├── db/
│ │ ├── Admin/ # Admin schema
│ │ ├── Seller/ # Seller schema and items
│ │ ├── Users/ # User schema, orders, wishlist
│ ├── uploads/ # Uploaded book images
│ ├── server.js # Main server file (routes + database logic)
│ ├── .env # Backend environment variables
│ ├── package.json # Backend dependencies
│ └── README.md (optional) # Backend-specific documentation
│
└── README.md # Project overview and setup instructions