const { Thoughts } = require('../models');

const ThoughtController = {
    // get all Thought
  getAllThoughts(req, res) {
    Thoughts.find({})
      .populate({
        path: 'Thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get one Thought by id
  getThoughtById({ params }, res) {
    Users.findOne({ _id: params.id })
      .populate({
        path: 'Thoughts',
        select: '-__v'
      })
      .select('-__v')
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // createThought
  createThought({ body }, res) {
    Users.create(body)
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
  },

// update Thought by id
updateThought({ params, body }, res) {
  Users.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbThoughtData => {
      if (!dbThoughtData) {
        res.status(404).json({ message: 'No Thought found with this id!' });
        return;
      }
      res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
},


  // delete Thought
  deleteThought({ params }, res) {
    Users.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
  }
}

module.exports = ThoughtController;