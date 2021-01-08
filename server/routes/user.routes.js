const LoginController = require('../controllers/login.controller'),
    RegController = require('../controllers/reg.controller'),
    LogoutController = require('../controllers/logout.controller'),
    UserController = require('../controllers/user.controller'),
    { authenticate } = require('../config/jwt.config'),
    express = require('express'),
    router = express.Router();

router.post("/register", RegController.register);
router.post("/login", LoginController.login);

router.get("/users", authenticate, UserController.index);
router.get("/logout", authenticate, LogoutController.logout);

module.exports = router