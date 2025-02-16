const express = require('express');
const { getReferrals, createReferral } = require('../controllers/referralController');

const router = express.Router();

router.get('/', getReferrals);
router.post('/', createReferral);

module.exports = router;
