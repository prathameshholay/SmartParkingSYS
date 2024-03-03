const { default: mongoose } = require('mongoose')
const mongooose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number:{
        type: Number,
        required:true
    },
    carData: {
        type: String,
    },
});

module.exports = mongooose.model('Author',authorSchema)