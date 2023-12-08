const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    empolyeename: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    },

    destination: {
        required: true,
        type: String
    },

    department: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('Empolyee Data', dataSchema)
