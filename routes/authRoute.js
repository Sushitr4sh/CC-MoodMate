const { Router } = require("express");
const authController = require("../controllers/authController");

/* Error Handlling */
const catchAsync = require("../utils/catchAsync");

const router = Router();

router.get("/", authController.home_get);

router.post("/register", catchAsync(authController.register_post));
router.post("/login", catchAsync(authController.login_post));
router.post("/logout", (req, res) => {});

module.exports = router;
