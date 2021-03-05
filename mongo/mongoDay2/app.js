const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const { Router } = require('express');
const dbConnectionString = 'mongodb://localhost/userdb';
// "userdb" is the database name
mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true, }); const udb = mongoose.connection;
udb.on('error', console.error.bind(console, 'connection error:'));
udb.once('open', function () {
    console.log('db connected');
});

const addressSchema = new mongoose.Schema({
    building: String,
    street: String,
    zipcode: String
});

const gradesSchema = new mongoose.Schema({

});

const restautantsSchema = new mongoose.Schema({
    address: addressSchema,
    borough: String,
    cuisine: String,
    name: String,
});

const Resturants = mongoose.model('Resturants', restautantsSchema);

app.get('/', (req, res, next) => {
    res.render('index', { title: 'Resturants (NoSQL)'});
});

app.post('/findCuisne', (req, res) => {
    let cuisine = req.body.cuisine;
    Resturants.findOne({cuisine: cuisine}, (err, data) => {
        if (err) return console.log(`Oops! ${err}`);
        let result = JSON.stringify(data);
        console.log(`data = ${result} -- ${data.name}`);
        res.send(result);
    });
});

app.get("/getResturants", (req, res) => {
    Resturants.find({},null, {limit: 10}, (err, data) => {
        console.log(`--${JSON.stringify(data)}`);
        res.render('resturants', { title: 'Resturants', resturants:data });
    });
});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`App Server listen on port: ${port}`);
});
