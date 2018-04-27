const express = require('express');
const cors = require('cors');
const request = require('request');
//const fetch = require('node-fetch');
require('isomorphic-fetch');
require('dotenvenc')('twitterFeed1');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load();
    // use bearer token with process.env.TWITTER_BEARER_TOKEN
}

app.use(express.json());
app.use(express.urlencoded());

app.post('/search', (req, res) => {
    let tweets = {};
    
    const baseUrl = 'https://api.twitter.com/1.1/search/tweets.json';
    const searchValue = req.body.value;
    console.log(req.body.value);
    const url = baseUrl + '?q=' + searchValue + '&tweet_mode=extended';

    const options = { 
        method: 'GET',
        headers: {
            'Authorization': "Bearer " + process.env.TWITTER_BEARER_TOKEN
        }
    };

    fetch(url, options).then(response => {
        return response.json();
    }).then(response => {
        tweets = response;
        res.send(response);
    });

    //res.send(tweets);
});

app.listen(port, () => console.log("listneing on port " + port));