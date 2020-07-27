const router = require('express').Router();
const trackerCtrl = require('../controllers/tracker.controller');

router.post('/', trackerCtrl.trackDelivery);

module.exports = router;
