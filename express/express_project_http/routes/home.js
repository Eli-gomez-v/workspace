// home.js is the router for the home route
const express = require('express');

const router = express.Router();
const { isAuthRedirect } = require('../middlewares/auth');
const controller = require('../controllers/home');

router.get('/home', isAuthRedirect, controller.home);

module.exports = router;
