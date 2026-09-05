# Ecommerce Clothing

A modern full-stack fashion e-commerce application built with React, Node.js, Express, and MongoDB.

The project provides a complete online shopping experience for customers and a dedicated admin dashboard for managing products and orders.

---

## Features

### Customer Application

- User registration and login
- JWT-based authentication
- Browse product collections
- Search products
- Filter products by category
- View detailed product information
- Select product sizes
- Add products to cart
- Update cart quantities
- Persistent user cart
- Checkout with delivery information
- Cash on Delivery (COD)
- Stripe Checkout integration
- View personal order history
- Track order status
- Responsive user interface

### Admin Dashboard

- Secure admin authentication
- Add new products
- Upload multiple product images
- Store product images with Cloudinary
- View all products
- Remove products
- View customer orders
- View delivery information
- View payment status
- Update order status

---

## Tech Stack

### Frontend

- React
- Vite
- React Router
- Tailwind CSS
- Axios
- React Toastify

### Admin Dashboard

- React
- Vite
- React Router
- Tailwind CSS
- Axios
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt
- Multer
- Validator

### External Services

- Cloudinary — product image storage
- Stripe — online payment processing

---

## Project Structure

```text
ecommerce-clothing/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   ├── .env.example
│   └── package.json
│
├── admin/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   └── pages/
│   ├── .env.example
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account
- Cloudinary account
- Stripe account

---

## Installation

Clone the repository:

```bash
git clone https://github.com/freddy810/ecommerce-clothing.git
```

Move into the project directory:

```bash
cd ecommerce-clothing
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Install Admin Dependencies

```bash
cd ../admin
npm install
```

---

## Environment Variables

The real `.env` files are not included in this repository for security reasons.

Create a `.env` file inside each application using the provided `.env.example` files.

### Backend

Create:

```text
backend/.env
```

Example:

```env
MONGODB_URL=your_mongodb_connection_string

CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

STRIPE_SECRET_KEY=your_stripe_secret_key

PORT=4000
```

### Frontend

Create:

```text
frontend/.env
```

```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin

Create:

```text
admin/.env
```

```env
VITE_BACKEND_URL=http://localhost:4000
```

> Never commit real `.env` files or secret API keys to GitHub.

---

## Running the Application

You will need three terminals.

### Backend

```bash
cd backend
npm run server
```

The backend will run by default on:

```text
http://localhost:4000
```

### Customer Frontend

```bash
cd frontend
npm run dev
```

### Admin Dashboard

```bash
cd admin
npm run dev
```

Vite will display the local URLs for both applications in the terminal.

---

## API Overview

The backend exposes REST API endpoints for:

```text
/api/user
/api/product
/api/cart
/api/order
```

These endpoints handle authentication, products, shopping carts, orders, payments, and admin operations.

---

## Payment Methods

### Cash on Delivery

Customers can place an order without making an online payment.

### Stripe

Stripe Checkout is integrated for online payments.

After payment, the application verifies the payment result and updates the corresponding order.

---

## Product Images

Product images are uploaded through the admin dashboard and stored using Cloudinary.

Multer is used on the backend to process image uploads before sending them to Cloudinary.

---

## Authentication

The application uses JSON Web Tokens (JWT) for authentication.

Protected routes are used for:

- Customer cart operations
- Customer orders
- Checkout
- Admin product management
- Admin order management

---

## Screenshots

Screenshots of the customer application and admin dashboard will be added here.

---

## Future Improvements

- Complete Razorpay payment integration
- Add product editing
- Add wishlist functionality
- Add product reviews and ratings
- Add stock and inventory management
- Add email order confirmations
- Add password reset functionality
- Add automated testing
- Add Stripe webhook verification
- Deploy frontend, admin dashboard, and backend

---

## Author

**Freddy**

GitHub: [@freddy810](https://github.com/freddy810)

---

## License

This project is currently provided for educational and portfolio purposes.