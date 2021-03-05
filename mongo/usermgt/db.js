// api to the database
const Pool = require('pg').Pool;
const url = require('url');
const DBConnectionString = process.env.DATABASE_URL;

const params = url.parse(DBConnectionString);

const auth = params.auth.split(':');
let SSL = process.env

const config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl:SSL
}

const pool = new Pool(config);

const getUsers = (req, res) => {
    let getUsersSQL = 'select * from users'
    pool.query(getUsersSQL, (err, results) => {
        if(err){
            throw err;
        }
        console.log(results);
        res.status(200).json(results.rows);
    });
}

const createUser = (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    let addUserSQL = 'insert into users (email, name) values ($1, $2) ';
    pool.query(addUserSQL, [email, name], (err, results) => {
        if(err) {
            throw err;
        }
        console.log(results);
        res.status(200).json(results);
    });
}

module.exports = {
    getUsers,
    createUser
}