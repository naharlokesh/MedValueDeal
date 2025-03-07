const express = require('express');
const {AllLabTest,LabTest_add} = require('../controllers/LabTest')
const router = express.Router();

router.route('/all').get(AllLabTest)
router.route('/labtest').post(LabTest_add)

module.exports = router