const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"]
    },

    age: {
        type: Number,
        default: 1
    },

    favoriteMovie: {
        type: Array
    }

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)