const { Schema, model, Types } = require('mongoose');
// const  {reactionSchema} = require('../models/Reaction.js');
const dateFormat = require('../utils/dateFormat');


const thoughtSchema = new Schema({
 
    thought: {
        type: String,
        maxlength:280,
        required: true,
    },

    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username:{
        type: String,
        required:true
    },
    reactions:[]

},
{
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }

);

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;