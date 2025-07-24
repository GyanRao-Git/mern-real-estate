# 🏘️ MERN Real Estate Management System

A full-featured real estate marketplace built using the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform allows property owners to list properties and potential buyers/renters to browse, filter, and interact with them.

![Repo Size](https://img.shields.io/github/repo-size/GyanRao-Git/mern-real-estate)
![Last Commit](https://img.shields.io/github/last-commit/GyanRao-Git/mern-real-estate)

---

## 🧠 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Folder Structure](#-folder-structure)
- [⚙️ Installation](#️-installation)
- [🔐 Authentication](#-authentication)
- [🌐 API Endpoints](#-api-endpoints)
- [🖼️ Screenshots](#️-screenshots)

---

## 🚀 Features

- 🧑‍💼 **User Roles**: Admin, Seller, and Buyer
- 🏘️ **Listings**: Add, edit, delete, and view real estate listings
- 📂 **Filter/Search**: By price, location, type, and more
- 🔐 **Auth System**: Register, login, JWT auth, and Google OAuth
- 📸 **Image Upload**: Firebase storage integration
- 📊 **Dashboard**: Custom stats for users and admins
- 💬 **Contact Feature**: Reach out to property owners
- 🧾 **Error Handling**: Centralized error and loading states
- 📱 **Responsive Design**: Mobile-friendly with clean UI

---

## 🛠️ Tech Stack

**Frontend**

- React + Javascript
- Redux Toolkit & RTK Query

**Backend**

- Node.js + Express
- MongoDB (Atlas)
- JWT for authentication
- Google OAuth
- Firebase (Image uploads)

**Dev Tools**

- Vercel (Frontend deployment)
- Render (Backend deployment)
- ESLint + Prettier
- Postman (API testing)

---

## 📦 Folder Structure

mern-real-estate/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # React pages (e.g. Home, Login)
│       ├── features/       # Redux Toolkit slices
│       ├── services/       # RTK Query endpoints
│       └── utils/          # Utility functions
│
├── server/                 # Node.js + Express backend
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose models
│   ├── routes/             # API route definitions
│   ├── middleware/         # JWT and error middleware
│   └── config/             # DB and Firebase config
│
├── .env.example            # Example environment variables
├── README.md               # Project documentation
└── LICENSE                 # Project license file


---

## ⚙️ Installation

> Follow these steps to run the project locally:

### 🔧 Clone the Repository

```bash
git clone https://github.com/GyanRao-Git/mern-real-estate.git
cd mern-real-estate


🖥️ Backend Setup (Node + Express)

cd server
npm install
cp .env.example .env
# Fill in your MongoDB URI, JWT secrets, Google OAuth keys, Firebase config
npm run dev


🌐 Frontend Setup (React + TS)

cd ../client
npm install
cp .env.example .env
# Add REACT_APP_API_URL and Firebase keys
npm start

Frontend → http://localhost:3000

Backend → http://localhost:5000/api/health

🔐 Authentication
JWT Tokens: Stored in HTTP-only cookies
Google OAuth
Private Routes: Protected frontend routes for dashboards, edit, etc.



## 🌐 API Endpoints

### 🔐 Auth Routes (`/api/auth`)

| Method | Endpoint     | Description                | Auth |
|--------|--------------|----------------------------|------|
| POST   | `/signup`    | Register a new user        | ❌    |
| POST   | `/signin`    | Login with credentials     | ❌    |
| POST   | `/google`    | Google OAuth login         | ❌    |
| GET    | `/signout`   | Logout current user        | ❌    |

### 👤 User Routes (`/api/user`)

| Method | Endpoint              | Description                     | Auth |
|--------|-----------------------|----------------------------------|------|
| GET    | `/:id`                | Get user profile by ID          | ✅    |
| POST   | `/update/:id`         | Update user data                | ✅    |
| DELETE | `/delete/:id`         | Delete a user                   | ✅    |
| GET    | `/listings/:id`       | Get listings created by user    | ✅    |

### 🏘️ Listing Routes (`/api/listing`)

| Method | Endpoint            | Description                      | Auth |
|--------|---------------------|----------------------------------|------|
| POST   | `/create`           | Create a new property listing    | ✅    |
| POST   | `/update/:id`       | Update listing by ID             | ✅    |
| DELETE | `/delete/:id`       | Delete listing by ID             | ✅    |
| GET    | `/get/:id`          | Get single listing by ID         | ❌    |
| GET    | `/get`              | Get all listings (public)        | ❌    |

---

🖼️ Screenshots


```
