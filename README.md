# Step-by-Step for MERN Stack Authentication
This shows you how to set up a simple MERN react backend to get your project on the roll! 

---
### 1.Project Structure Overview
     ```
    my-mern-auth-app/
     │
     ├── backend/
     │   ├── server.js
     │   ├── routes/
     │   │   ├── authRoutes.js
     │   │   └── userRoutes.js
     │   ├── models/
     │   │   └── User.js
     │   └── middleware/
     │       └── auth.js
     │   └── .env
     │
     └── frontend/
         ├── src/
         │   ├── pages/
         │   │   └── AuthPage.jsx
         │   ├── components/
         │   │   └── Login/
         │   │       ├── LoginForm.jsx
         │   │       └── SignUpForm.jsx
         │   ├── store/
         │   │   └── userSlice.js
         │   └── index.js
         └── .env
     ```
### 2. Setting Up the Backend
1. Backend Installation
     ```
     cd backend
     npm init -y
     npm install express mongoose cors dotenv bcryptjs jsonwebtoken
     npm install --save-dev nodemon  
     ```
2. Add a start script in your package.json for running the backend with nodemon:
     ```
     "scripts": {
       "start": "nodemon server.js"
     }
     ```
     Now, whenever you run the backend, use:

     ```
     npm run start
     ```
3. Environment Variables with .env
Add a section on setting up environment variables for security and flexibility.
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
---
