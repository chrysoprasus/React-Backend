# Step-by-Step for MERN Stack Authentication
This shows you how to set up a simple MERN react backend to get your project on the roll!  asfsafsaf

---
## Things to note
There is a lot of logging user ID and other data that probably shouldnt be logged in a finished produced! Adding more security is recommend and I am working on a production level auth so stay tuned! 

Quick Start: Download from github, install dependencies for both front and backend, then add the `.env` file and your good to go!

---
## 1.Project Structure Overview
     
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
     
## 2. Setting Up the Backend
1. Backend Installation
     ```
     npm install express mongoose cors dotenv bcryptjs jsonwebtoken
     npm install --save-dev nodemon  
     ```
2. Add a start script in your package.json for running the backend with nodemon:
   (if downloaded via github this is not needed)
     ```
     "scripts": {
       "dev": "nodemon server.js"
     }
     ```
     Now, whenever you run the backend, use:

     ```
     npm run dev
     ```
4. Environment Variables with .env 
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
---
## 3. Frontend Setup
1. Install Dependencies
Run the following commands to set up React:
     ```
     npx create-react-app frontend
     cd frontend
     npm install axios react-redux @reduxjs/toolkit react-router-dom react-hot-toast jwt-decode
     ```
     You can now run the the frontend with:
     ```
     npm start
     ```
