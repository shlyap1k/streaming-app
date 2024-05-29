const { Router } = require('express');
const counterController = require('../controllers/counterController');

const router = Router();

router.get('/api/counters', counterController.count_get);

module.exports = router;