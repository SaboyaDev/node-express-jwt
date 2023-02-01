const mongoose = require('mongoose')
const User = require('../model/User')
const { hash } = require('bcrypt')
const saltRounds = 10

// Renders Signup Page
const signupGet = (req, res) => {
	res.render('signup')
}

// Renders Login Page
const loginGet = (req, res) => {
	res.render('login')
}

// Create New User
const signupPost = async (req, res) => {
	res.send(data)
}

// Authenticate User
const loginPost = (req, res) => {
	const data = req.body
	res.send(data)
}

module.exports = {
	signupGet,
	loginGet,
	signupPost,
	loginPost,
}
