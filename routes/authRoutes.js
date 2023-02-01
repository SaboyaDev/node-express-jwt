const { Router } = require('express')
const router = Router()

const {
	signupGet,
	loginGet,
	signupPost,
	loginPost,
} = require('../controllers/authController')

// GET Sign Up Page /signup
router.get('/signup', signupGet)

// GET Login Page /login
router.get('/login', loginGet)

// POST Create New User in DB /signup
router.post('/signup', signupPost)

// POST Authenticate User /login
router.post('/login', loginPost)

module.exports = router
