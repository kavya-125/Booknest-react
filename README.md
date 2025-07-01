# 📚 BookNest – Where Stories Nestle

BookNest is a full-stack **MERN** (MongoDB, Express.js, React.js, Node.js) web application designed to serve as a feature-rich online bookstore. It supports multiple user roles – **User**, **Seller**, and **Admin** – each with their own dedicated functionality and dashboard.

---


## 🛠️ Features

### 👤 User
- Register/Login
- Browse all books
- Filter books by genre
- View book details
- Add to Wishlist
- Add to Cart
- Place Orders
- View Order History

### 🛒 Seller
- Register/Login
- Add Books (with image upload)
- View, Update, Delete Books
- View Orders Received
- Dashboard with Analytics (Items & Orders)

### 🛡️ Admin
- Login
- View/Delete Users
- View/Delete Sellers
- View All Orders & Items
- Dashboard with Graphs and Analytics

---

## 🗂️ Folder Structure

BookNest-MERN/
├── backend/
│ ├── db/
│ │ ├── Admin/
│ │ ├── Seller/
│ │ ├── Users/
│ ├── uploads/ # For book images
│ ├── .env # Environment variables (hidden)
│ ├── server.js # Main server file
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── Admin/
│ │ ├── Seller/
│ │ ├── User/
│ │ ├── Components/
│ │ └── App.jsx
│ ├── public/
│ ├── .env
│ ├── index.html
│ └── ...
│
├── .gitignore
├── README.md
└── package.json

---

## ⚙️ Tech Stack

- **Frontend**: React, Tailwind CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other**: Axios, Multer (for image upload), Recharts (for analytics), React Router DOM

---

## 🚀 How to Run Locally

### 🔧 Prerequisites
- Node.js and npm
- MongoDB (locally or MongoDB Atlas)

### 📦 Clone & Install

```bash
git clone https://github.com/koushikm08/Booknest-MERN.git
cd Booknest-MERN
cd backend
npm install
# Create .env file with MongoDB connection string
npm start
cd frontend
npm install
npm run dev
http://localhost:5173


🔐 Environment Variables
Create .env files in both backend and frontend folders.
Backend .env:
MONGO_URL=your_mongodb_connection_string
PORT=4000
User Home
![image](https://github.com/user-attachments/assets/ecd6d4d6-8bda-4d2c-8d14-0e0ca052c19a)
Seller Login
![image](https://github.com/user-attachments/assets/46545c36-67e1-4eca-a6a7-a6246d22d4c0)


Admin Dashboard
![image](https://github.com/user-attachments/assets/676c586d-d0dc-41e7-9cb7-56adcf6754ec)
👨‍💻 Author
Koushik Mallela
📧 mallelakoushik05@gmail.com
