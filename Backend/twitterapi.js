

const { TwitterApi }=require('twitter-api-v2');

const client = new TwitterApi({
  appKey:"XXXX" ,
  appSecret:"XXX",
  accessToken:"XXXX",
  accessSecret: "XXXXX",
  bearerToken: "XXXX"
});


const rwClient=client.readWrite;

module.exports=rwClient;