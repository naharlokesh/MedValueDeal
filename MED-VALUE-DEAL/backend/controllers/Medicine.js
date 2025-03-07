const Medicine = require('../models/Medicine_model')

const AllMedicine = async (req, res) => {
    try {
        const medicine = await Medicine.find({})
        res.status(200).json(medicine)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const Medicine_add = async (req, res) => {
    try {
        const medicine = await Medicine.create(req.body)
        res.status(200).json({ medicine })
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

module.exports = { AllMedicine, Medicine_add };