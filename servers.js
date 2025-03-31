// const express = require("express");
// const dotenv = require("dotenv");
// const session = require("express-session");
// const sequelize = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const User = require("./models/user");
// const Log = require("./models/log");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.set("view engine", "ejs");

// // Session configuration
// app.use(session({ secret: "your_secret_key", resave: false, saveUninitialized: true }));

// // Routes
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;

// // Sync Database and Start Server
// sequelize.sync({ alter: true })
//     .then(() => {
//         console.log("Database & tables synced...");
//         app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//     })
//     .catch(err => console.log("Database sync error:", err));
const express = require('express');
const app = express();
const path = require('path');

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure correct path

// Serve static files (if needed)
app.use(express.static('public'));

// Home Route
app.get('/', (req, res) => {
    res.render('index');
});

// Login Route
app.get('/login', (req, res) => {
    res.render('login'); // Make sure 'login.ejs' exists in 'views'
});

// Register Route
app.get('/register', (req, res) => {
    res.render('register'); // Make sure 'register.ejs' exists in 'views'
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
