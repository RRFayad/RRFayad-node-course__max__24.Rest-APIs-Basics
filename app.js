const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

const app = express();

// app.use(bodyParser.urlencoded());    // This is what we used before, to get data from forms (x-www-form-urlencoded)
app.use(bodyParser.json()); // applicatoin/json

app.use("/feed", feedRoutes);

app.listen(8080);
