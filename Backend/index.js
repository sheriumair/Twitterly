

const express=require('express');
const axios=require('axios');
const bodyParser = require('body-parser');

const app=express();

require('dotenv/config');

const Tweet=require('./models/TweetM.js');

const rwClient=require("./twitterapi.js");
const mongoose=require('mongoose');


app.use(bodyParser.json());

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// API endpoint for creating tweets
app.post('/api/tweets', async (req, res) => {
  const { content } = req.body;

  try {
    const { data: createdTweet } = await rwClient.v2.tweet(content);
    console.log('Tweet', createdTweet.id, ':', createdTweet.text);

    const newTweet = new Tweet({
      tweetId: createdTweet.id,
      content: createdTweet.text,
    });

    await newTweet.save();
    console.log('Tweet saved to MongoDB');

    res.status(200).json({ message: 'Tweet created successfully' });
  } catch (error) {
    console.error('Error creating tweet:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
})


   //Connect to DB
 mongoose.connect(process.env.DB_Connection, {useNewUrlParser: true, useUnifiedTopology: true } )
 .then(() => console.log('Connected Successfully with the DB'))
 .catch((err) => { console.error(err); });

// Middleware for parsing JSON requests
 app.use(express.json());

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
