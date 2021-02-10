const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
console.log(`app name = ${process.env.APP_NAME}`);

app.use(express.urlencoded({extended:false}));

//api for the client (browswer)
app.get('/users', (req, res) => {
    res.send('all susers');
});

app.post('/createUser', (req, res) => {
    res.send('new user created');
});

app.listen(port, () => {
    console.log(`Listening on ${port}`);
});