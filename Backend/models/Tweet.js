

const mongoose=require('mongoose');


const TweetSchema=mongoose.Schema({
    tweetId: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

module.exports=mongoose.model('Tweet',TweetSchema)