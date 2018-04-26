const express = require('express');
const cors = require('cors');
require('dotenvenc')('twitterFeed1');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
    require('dotenv').load();
}

app.use(cors());

app.get('/', (req, res) => {
    const greet = { hello: "welcome to the server."};
    res.send(greet);
});

app.listen(port, () => console.log("listneing on port " + port));