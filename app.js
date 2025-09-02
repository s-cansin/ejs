// express-ejs-layouts

const path = require('path');
const express = require('express');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const username = 'samed';
const isLoggedIn = true;

app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout', 'layouts');
app.use(express.static(path.join(__dirname, '/public')));

app.use(expressLayouts);

app.get('/', (req, res) => {
	res.render('index', { username,isLoggedIn })
})

app.listen(3000, () => console.log('running'));