const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");
const homePage = require("../client/homePage.js")

app.listen (5000, () => {
    console.log("Server has started on port 5000")
});


// grab candidate data from the data base







