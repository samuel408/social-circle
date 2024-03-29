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

});

const Reaction = model('Reactions', reactionSchema);

module.exports = Reaction;