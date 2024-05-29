const { Router } = require('express');
const cameraController = require('../controllers/cameraController');

const router = Router();

router.get('/api/cameras', cameraController.camera_get);
router.post('/api/camera', cameraController.camera_post)

module.exports = router;