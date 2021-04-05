const express = require('express');
var getRouter = require('./routes/getDetails.js');
var postRouter = require('./routes/postDetails.js');
var deleteRouter = require('./routes/deleteDetails.js');
var putRouter = require('./routes/updateDetails.js');

const app = express();

app.use(express.json());
app.use(express.raw());
app.use(express.urlencoded({extended: true}));

app.use(getRouter);
app.use(postRouter);
app.use(deleteRouter);
app.use(putRouter);

app.listen(3000, function () {
    console.log("Listening on port 3000");
});