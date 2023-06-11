import React, { useState } from 'react';
import axios from 'axios';
import "./style.css"

const TweetForm = () => {
  const [tweetContent, setTweetContent] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [tweet, setTweet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/tweets', { content: tweetContent });
      console.log('Tweet submitted successfully!');
      setSuccessMessage('Tweet submitted successfully!');
      setTweet(response.data.content);
      setTweetContent('');
    } catch (error) {
      console.error('Error submitting tweet:', error);
    }
  };

  return (
    <>
      <h1>Welcome to my Twitterly</h1>
      <h2>Please tweet whatever you want</h2>
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <input
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            placeholder="Enter your tweet"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
     
    </>
  );
};

export default TweetForm;
