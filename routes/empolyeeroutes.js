const express = require('express');

const router = express.Router()
module.exports = router;


//Route import
const Model = require('../model/empolyeemodel');

router.post('/post', async (req, res) => {
    const data = new Model({
        empolyeename: req.body.empolyeename,
        salary: req.body.salary,
        destination: req.body.destination,
        department: req.body.department


    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})