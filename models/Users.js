const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
 
    username: {
        type: String,
        unique:true,
        required: true,
        trim:true
    },

    email:  {
        type: String,
        unique:true,
        required: true,
        trim:true

    },

    thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref:'Thoughts'
    }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
        }
    ]

    
},

{
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
  );

  userSchema.virtual('friendCount').get(function(){
      return this.friends.length;
  });

 const Users = model('Users', userSchema);

module.exports = Users;