const LabTest = require('../models/LabTest_model')

const AllLabTest = async (req, res) => {
    try {
        const labtest = await LabTest.find({})
        res.status(200).json(labtest)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const LabTest_add = async (req, res) => {
    try {
        const labtest = await LabTest.create(req.body)
        res.status(200).json({ labtest })
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = { AllLabTest, LabTest_add };