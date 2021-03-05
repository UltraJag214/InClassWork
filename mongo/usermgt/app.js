const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3000;
console.log(`app name = ${process.env.APP_NAME}`);

app.use(express.urlencoded({extended:false}));

//api for the client (browswer)
app.get('/users', db.getUsers);

app.post('/createUser', db.createUser);

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});