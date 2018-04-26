// general config
const configGlob = {};

// production specific config
const configProd = {
    API_URI: "http://www.example.com"
};

// development specific config
const configDev = {
    API_URI: "http://localhost:5000"
};

// merged config

const API_URI = process.env.NODE_ENV === "production" ? configProd : configDev;
const config = {
    ...configGlob, 
    ...API_URI
};

export default config;
