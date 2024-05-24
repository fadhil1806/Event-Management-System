const responseHelpers = require("../helpers/responseHelper");
const jwt = require('jsonwebtoken');
require('dotenv').config()

async function authentication(req, res, next) {
    const token = req.headers.authorization;
    console.log(req.headers)
    if(token === null) return responseHelpers(res, 401, {status: false, message: 'No token'});
    jwt.verify(token, process.env.API_KEY, (err, decoded) => {
        if(err) return responseHelpers(res, 401, {status: false, message: 'Invalid token'});
        req.data = decoded;
        next();
    }
)}

module.exports = authentication