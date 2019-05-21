const passDatabase = require('passDatabase');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const appHandlers = [cors(), bodyParser.json()];

const app = express();
app.use(appHandlers);

app.listen(3306, error => {console.log('Something goes bad');})

const {Pool} = require('pg');
const userDb = new Pool({
	user: passDatabase.user,
	database: passDatabase.database,
	password: passDatabase.passwd
});

userDb.on('error', () => {
	console.log('Error, lost connection to database');
});