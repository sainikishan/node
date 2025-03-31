const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const Log = require("../models/log");
const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register", { message: null });
});

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });

        res.redirect("/login");
    } catch (error) {
        res.render("register", { message: "Error registering user" });
    }
});

router.get("/login", (req, res) => {
    res.render("login", { message: null });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user) return res.render("login", { message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.render("login", { message: "Invalid credentials" });

        req.session.user = user;
        await Log.create({ userId: user.id, action: "login" });

        res.redirect("/dashboard");
    } catch (error) {
        res.render("login", { message: "Error logging in" });
    }
});

router.post("/logout", async (req, res) => {
    if (req.session.user) {
        await Log.create({ userId: req.session.user.id, action: "logout" });
        req.session.destroy();
    }
    res.redirect("/login");
});

module.exports = router;
