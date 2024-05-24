var express = require('express');
const { registerGuru, getDataGuru, loginGuru } = require('../controllers/guru');
const validate = require('../middleware/validate');
const { body } = require('express-validator');
const router = express.Router();

const validation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("username").notEmpty().withMessage("Username is required"), 
    body("password").notEmpty().withMessage("Password is required")
];

const validationLogin = [
  body("username").notEmpty().withMessage("Username is required"), 
  body("password").notEmpty().withMessage("Password is required")
]

router.get('/', getDataGuru);
router.post('/create', validate(validation), registerGuru);
router.post('/login', validate(validationLogin), loginGuru)

module.exports = router;