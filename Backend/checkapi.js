const axios = require('axios');
require('dotenv').config();

const bearerToken = process.env.TWITTER_BEARER_TOKEN;
const screenName = 'SheheryarU'; // Replace with the desired Twitter account's screen name

axios({
  method: 'get',
  url: `https://api.twitter.com/2/users/me/username/${screenName}`,
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'Content-Type': 'application/json',
  },
})
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
