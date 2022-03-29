var express = require('express');
var router = express.Router();
const { createUser, getAllUsers, getOneUser, updateUser, deleteUser } = require('./controller/UsersController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello World!');
});

router.post('/create-user', createUser)
router.get('/get-all-users', getAllUsers)
router.get('/get-user/:id', getOneUser)
router.put('/update-user/:id', updateUser)
router.delete('/delete-user/:id', deleteUser)

module.exports = router;