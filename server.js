const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const { PORT, DB_URI } = process.env
const authRoutes = require('./routes/authRoutes')

const app = express()
const port = PORT || 5000
// middleware
app.use(express.static('public'))
app.use(express.json())

// view engine
app.set('view engine', 'ejs')

// database connection
mongoose
	.connect(DB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(result =>
		app.listen(port, () => {
			console.log(`Listening on Port:${port}`)
		})
	)
	.catch(err => console.log(err))

// routes
app.get('/', (req, res) => res.render('home'))
app.get('/smoothies', (req, res) => res.render('smoothies'))
app.use('/api/auth', authRoutes)
