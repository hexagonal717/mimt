const router = require('express').Router();
const {
  signup,
  login,
} = require('../../../controllers/user/userAuthController');

router.post('/signup', signup);

router.post('/login', login);
module.exports = router;
