 const router = require('express').Router();
 const {
    getAllThoughts,
    getThoughtById,
      createThought,
      updateThought,
      deleteThought

    } = require('../../controllers/Thought-controller');

   
   
    //thoughts

        //  api/thoughts
    router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);
    
        //  api/thoughts/:id
    router
      .route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought);
      

      

 module.exports = router;