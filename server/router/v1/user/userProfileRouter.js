const router = require('express').Router();
const {
  verifyToken,
} = require('../../../middleware/user/userAuthMiddleware');
const {
  getUser,
  deleteUser,

} = require('../../../controllers/user/userProfileController');

router.get('/get-user/:id', verifyToken, getUser);

router.delete('/delete-user/:id', verifyToken, deleteUser);

module.exports = router;
