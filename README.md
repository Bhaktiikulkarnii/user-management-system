# User Management System (MERN Stack)

A full-stack User Management System built using the MERN stack with JWT authentication and role-based access control. The application supports user signup/login, admin user management, activation/deactivation of users, and protected routes.

---

## Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Axios
- Tailwind CSS
- Deployed on Vercel

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Deployed on Render

---

## Features

### Authentication
- User signup and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes

### Role-Based Access Control
- User and Admin roles
- Admin-only routes
- UI elements hidden based on role

### Admin Features
- View all users
- Activate / Deactivate users
- Prevent admin from deactivating self

### User Features
- View personal dashboard
- Access protected content

---

## Project Structure

```

user-management-system/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── tests/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── api/
│   │   └── App.jsx
│   └── package.json
│
└── README.md

```

---

## Environment Variables

### Backend (`.env`)

```

MONGO_URI=mongodb+srv://bhaktikulkarni2411_db_user:Admin12345@cluster0.qdbec9i.mongodb.net/userdb?retryWrites=true&w=majority
JWT_SECRET=supersecretkey
NODE_ENV=production

````

---

## Local Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev
````

Server runs on:

```
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints (Backend)

### Auth Routes

* POST `/api/auth/signup`
* POST `/api/auth/login`

### User Routes

* GET `/api/users/me` (protected)
* GET `/api/users` (admin only)
* PUT `/api/users/:id/toggle-status` (admin only)

---

## Automated Testing

* Jest
* Supertest
* Authentication and authorization tests included

Run tests:

```bash
npm test
```

---

## Deployment Links

### Frontend (Vercel)

[https://user-management-system-i44s.vercel.app](https://user-management-system-i44s.vercel.app)

### Backend (Render)

[https://user-management-backend-f7ys.onrender.com](https://user-management-backend-f7ys.onrender.com)

---

## Notes

* Root backend URL will show `Cannot GET /` (expected behavior)
* Use `/api/*` endpoints for backend access
* Admin accounts must be created via signup and assigned admin role in database

---

## Author

Bhakti Kulkarni
