const express = require('express');
const { signup, login } = require('../controllers/authController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Example route restrictions
router.get('/dashboard', authenticate, authorize(['user', 'admin']), (req, res) => {
  res.status(200).send('Dashboard access granted');
});

router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.status(200).send('Admin access granted');
});

module.exports = router;
