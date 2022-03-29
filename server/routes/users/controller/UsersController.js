const User = require('../model/User')

// Create User
const createUser =  async (req, res) => {
    try {
        const { name, age, favoriteMovie } = req.body
        const newUser = new User({
            name: name,
            age: age,
            favoriteMovie: favoriteMovie
        })
        console.log(req.body)
        const savedUser = await newUser.save()
        res
            .status(200)
            .json({ message: "User has been created", payload: savedUser })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

// Get all users
const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find()
        res.status(200).json({ payload: allUsers })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Get one user
const getOneUser = async (req, res) => {
    const { id } = req.params
    console.log(typeof id)
    console.log("id "+ id)
    try {
        let oneUser = await User.findById(id)
        res.status(200).json({ payload: oneUser })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Update user
const updateUser = async (req, res) => {
    const { id } = req.params
    try {
        let updateUser = await User.findByIdAndUpdate(id, req.body, { new: true })
        if(updateUser === null) throw new Error("No user with id found")
        res.status(200).json({ message: "User has been updated", payload: updateUser })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Delete user
const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        let deleteUser = await User.findByIdAndDelete(id)
        if(deleteUser === null) throw new Error("No user with id found!")
        res.status(200).json({ message: "User has been deleted", payload: deleteUser })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser
}