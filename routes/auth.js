var express = require('express')
const { loginGuru } = require('../controllers/guru');
const { validate } = require('../db/config');
const { body } = require('express-validator');
const router = express.Router()


const validation = [
    body("username").notEmpty().withMessage("Username is required"), 
    body("password").notEmpty().withMessage("Password is required")
  ];
// router.post('/login', validate(vali))
// router.post('/', validate(validation), loginGuru)

module.exports = router