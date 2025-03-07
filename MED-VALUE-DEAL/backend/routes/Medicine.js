const express = require('express');
const {AllMedicine,Medicine_add} = require('../controllers/Medicine')
const router = express.Router();

router.route('/all').get(AllMedicine)
router.route('/med').post(Medicine_add)

module.exports = router