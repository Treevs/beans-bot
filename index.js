require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
const schedule = require('node-schedule');

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const sendTweet = () =>{
    twitterClient.tweets.statusesUpdate({
        status: "Mmm... beans"
    }).then (response => {
        console.log("Tweeted!", response)
    }).catch(err => {
        console.error(err)
    })
}

const job = schedule.scheduleJob('20 16 * * *', function(){
    sendTweet();
});