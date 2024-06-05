const jwt = require('jsonwebtoken')
const {JWT_EXPIRES_IN, API_KEY} = process.env
require('dotenv').config()
async function generateToken(data) {
    return jwt.sign(data, API_KEY, {expiresIn: JWT_EXPIRES_IN});
}

module.exports = generateToken