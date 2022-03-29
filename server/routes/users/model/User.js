const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String
    },

    age: {
        type: Number
    },

    favoriteMovie: {
        type: Array
    }

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)