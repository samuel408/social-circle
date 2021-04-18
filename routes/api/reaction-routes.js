const router = require('express').Router();
 const {
    getAllReactions,
    getReactionById,
      createReaction,
      updateReaction,
      deleteReactions

    } = require('../../controllers/reaction-controller');
    
          //reactions
          router
          .route('/')
          .get(getAllReactions)
          .post(createReaction);
          
              //  api/reactions/:id
          router
            .route('/:id')
            .get(getReactionById)
            .put(updateReaction)
            .delete(deleteReactions);
    module.exports = router;