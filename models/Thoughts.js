const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody:{
        type:String,
        required:true,
        maxlength:280,
    },

    userName:{
        type:String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal) 
    }

})

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
    reactions:[reactionSchema]

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