// index.js
require('dotenv-safe').load();
//var jwt = require('jsonwebtoken');
const http = require('http');
const express = require('express');
const httpProxy = require('express-http-proxy')
const app = express()
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const helmet = require('helmet')

const movieServiceProxy = httpProxy('http://localhost:3001')
const cinemaServiceProxy = httpProxy('http://localhost:3002')

// Proxy request
app.get('/movies', (req, res, next) => {
	movieServiceProxy(req, res, next)
})

app.get('/movies/premieres', (req, res, next) => {
	movieServiceProxy(req, res, next)
})

app.get('/movies/:id', (req, res, next) => {
	movieServiceProxy(req, res, next)
})

app.get('/cities', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.get('/cities/:city/movies', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.get('/cities/:city/movies/:movie', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.get('/cities/:city/cinemas', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.get('/cinemas/:cinema/movies', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.get('/cinemas/:cinema/movies/:movie', (req, res, next) => {
	cinemaServiceProxy(req, res, next)
})

app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

const server = http.createServer(app);
server.listen(3000);

/** 
//authentification
app.post('/login', (req, res, next) => {
	if (req.body.user === 'luiz' && req.body.pwd === '12345') {
		//auth ok
		const id = 1;
		var token = jwt.sign({ id }, process.env.SECRET, {
			expiresIn: 300 //expira em 5 min
		})
		res.status(200).send({ auth: true, token: token})
	}
	res.status(500).send('Login inválido!')
})


app.get('/logout', function(req, res) {
	res.status(200).send({ auth: false, token: null})
})

function verifyJWT(req, res, next) {
	var token = req.headers['x-access-token'];
	if (!token) return res.status(401)
		.send({ auth: false, message: 'No token provided'})
	jwt.verify(token, process.env.SECRET, function(err, decoded) {
		if (err) return res.status(500)
			.send({ auth: false, message: 'Failed to authentificate token'})
			// se tudo estiver OK, salva no request para uso posterior
			req.userId = decoded.id;
			next()
	})
}
*/