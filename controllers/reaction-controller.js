const { Reaction } = require('../models');

const reactionController = {
    // get all Reactions
  getAllReactions(req, res) {
    Reaction.find({})
      .populate({
        path: 'Reactions',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbReactionData => res.json(dbReactionData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
  // get one Reactions by id
  getReactionById({ params }, res) {
    Reaction.findOne({ _id: params.id })
      .populate({
        path: 'Reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbReactionData => res.json(dbReactionData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // create Reactions
  createReaction({ body }, res) {
    Reaction.create(body)
    .then(dbReactionData => res.json(dbReactionData))
    .catch(err => res.json(err));
  },

// update Reactions by id
updateReaction({ params, body }, res) {
    Reaction.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbReactionData => {
      if (!dbReactionData) {
        res.status(404).json({ message: 'No Thought found with this id!' });
        return;
      }
      res.json(dbReactionData);
    })
    .catch(err => res.status(400).json(err));
},


  // delete Reactions
  deleteReactions({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.id })
    .then(dbReactionData => res.json(dbReactionData))
    .catch(err => res.json(err));
  }
}

module.exports = reactionController;