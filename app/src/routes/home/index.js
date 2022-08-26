"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.crtl");

router.get("/", ctrl.show.home);
router.get("/login", ctrl.show.login);
router.get("/signup", ctrl.show.signup);

router.post("/login", ctrl.process.login);
router.post("/signup", ctrl.process.signup);

module.exports = router;