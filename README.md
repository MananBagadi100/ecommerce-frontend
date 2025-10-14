# 🛍️ E-Commerce Web Application

> A full-stack e-commerce platform built with modern web technologies, featuring secure authentication, a complete checkout workflow, and a responsive UI. Perfect for showcasing full-stack development skills.

**Live Demo**: [https://myecommerce-frontend.vercel.app](https://myecommerce-frontend.vercel.app)

**Backend Repository**: [ecommerce-backend](https://github.com/your-username/ecommerce-backend)

---

## 🚀 Features

- **🔐 User Authentication**: Secure registration and login using JWT tokens and cookies
- **🛡️ Protected Routes**: Backend verification using middleware for authorized access
- **📞 Contact Us**: Logged-in users can submit issues or queries stored in the database
- **🛒 Cart & Checkout**: Add, remove, and review products before confirming purchase
- **📦 Order Management**: Each order saved with normalized schema (Orders & OrderItems tables)
- **💬 Inline Feedback**: Success and error messages rendered dynamically (green/red text)
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Modern Stack**: Built with Vite for fast development and optimized builds
- **🏗️ Clean Architecture**: Separated controllers, routes, and models for scalability

---

## 🧠 Tech Stack

### Frontend
- **React** (Vite) — Fast, modern UI library
- **Axios** — HTTP client for API calls
- **Context API** — State management
- **CSS Modules / MUI** — Styling and component library

### Backend
- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **JWT** — Secure authentication
- **bcrypt** — Password hashing

### Database & Deployment
- **MySQL** — Relational database with normalization
- **Vercel** — Frontend hosting
- **Render** — Backend hosting
- **Planetscale / Railway** — Database hosting

---

## 📋 Project Structure

### Frontend (React)

```
frontend/
 ├── src/
 │   ├── components/        # Reusable React components
 │   ├── pages/             # Page components
 │   ├── context/           # Context API state management
 │   ├── App.jsx            # Main app component
 │   └── main.jsx           # Entry point
 ├── public/                # Static assets
 ├── .env                   # Environment variables
 └── package.json
```

### Backend (Node + Express)

```
backend/
 ├── controllers/           # Business logic
 ├── models/                # Database models
 ├── routes/                # API endpoints
 ├── middleware/            # Auth & verification
 ├── server.js              # Express server
 ├── .env                   # Environment variables
 └── package.json
```

---

## 🗄️ Database Schema

The project uses a normalized MySQL database with the following tables:

| Table | Purpose |
|-------|---------|
| **users** | Stores user account information |
| **userQueries** | Stores customer support queries |
| **orders** | Stores order information |
| **order_items** | Stores individual items in each order |

For detailed schema information, see [Backend README](https://github.com/your-username/ecommerce-backend).

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js (v14+)
- MySQL (v8+)
- Git

### 1. Clone Repositories

```bash
# Clone frontend
git clone https://github.com/your-username/ecommerce-frontend.git
cd ecommerce-frontend

# Clone backend (in separate folder)
git clone https://github.com/your-username/ecommerce-backend.git
cd ecommerce-backend
```

### 2. Setup Backend

```bash
cd backend
npm install

# Create .env file with:
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=ecommerce
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:5173

npm start
```

### 3. Setup Frontend

```bash
cd frontend
npm install

# Create .env file with:
VITE_API_URL=http://localhost:5000

npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌐 Deployment

### Frontend (Vercel)

1. Push frontend code to GitHub
2. Go to [Vercel](https://vercel.com) and create a new project
3. Import your frontend repository
4. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy

### Backend (Render)

1. Push backend code to GitHub
2. Go to [Render](https://render.com) and create a new Web Service
3. Link your backend repository
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variables (see Backend README for details)
7. Deploy

---

## 🧩 Author

**👨‍💻 Manan Bagadi**

Full Stack Developer | Machine Learning Enthusiast

📧 mananbagadi100@gmail.com

🌐 [linkedin.com/in/manan-bagadi-8599b0225](https://www.linkedin.com/in/manan-bagadi-8599b0225/)

---

## ✅ Status

All core features complete. Project ready for deployment and demonstration for internship or job applications.

---

## 📄 License

This project is open source and available under the MIT License.