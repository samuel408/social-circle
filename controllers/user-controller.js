const { Users } = require('../models');

const UserController = {
    // get all users
  getAllUsers(req, res) {
    Users.find({})
      .populate({
        path: 'Thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get one User by id
  getUserById({ params }, res) {
    Users.findOne({ _id: params.id })
      .populate({
        path: 'Thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createUser
  createUser({ body }, res) {
    Users.create(body)
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  },

// update User by id
updateUser({ params, body }, res) {
  Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.status(400).json(err));
},


  // delete User
  deleteUser({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => res.json(err));
  }
}

module.exports = UserController;