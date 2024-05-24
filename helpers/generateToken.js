const jwt = require('jsonwebtoken')
require('dotenv').config()
async function generateToken(data) {
    return jwt.sign(data, process.env.API_KEY);
}

module.exports = generateToken