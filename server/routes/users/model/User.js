const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"]
    },

    age: {
        type: Number,
        default: 0
    },

    favoriteMovie: {
        type: Array,
        required: [true, "A favorite movie is required!"]
    }

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)