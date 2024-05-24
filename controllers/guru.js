const responseHelpers = require("../helpers/responseHelper");
const { getDataGuruByUsername } = require("../models/guru");
const guru = require("../db/tables/guru");
const generateId = require("../helpers/generateId");
const { hashPassword, comparePassword } = require("../helpers/hash");
const generateToken = require("../helpers/generateToken");

async function getDataGuru(req, res) {
    try {
        //get data tetapi tidak ngambil password, createdAt, updatedAt
        const data = await guru.findAll({
            attributes: {exclude: ['password', 'createdAt', 'updatedAt']}
        })
        return responseHelpers(res, 200, data);
    }
    catch {
        return responseHelpers(res, 500, {message: 'Internal server error'});
    }

}
async function registerGuru(req, res) {
    const { name, username, password } = req.body;

    try {
        //check username of database
        const existingUsername = await getDataGuruByUsername(username) 
        if(existingUsername !== null) return responseHelpers(res, 409, {message: 'username already exist'})

        //hash and generateID
        const hashedPassword = await hashPassword(password)
        const idGuru = await generateId(20)

        //Register
        await guru.create({
            id: idGuru, name, username, password: hashedPassword
        })
        return responseHelpers(res, 201, {message: 'Successfully created teacher account'})
    }
    catch(error) {
        console.log(error)
        return responseHelpers(res, 500, {message: 'Internal server error'})
    }
}

async function loginGuru(req, res) {
    const { username, password } = req.body;
    try {
        //check username of database
        const existingUsername = await getDataGuruByUsername(username)
        console.log(existingUsername)
        if(existingUsername == null) return responseHelpers(res, 404, {message: 'username not found'})

        const dataGuru = existingUsername;
        const isValidPassword = await comparePassword(password, dataGuru.dataValues.password)

        if(!isValidPassword) return responseHelpers(res, 404, {message: 'Invalid password'})
       
        delete dataGuru.dataValues.password
        const token = await generateToken(dataGuru.dataValues)
    
        return responseHelpers(res, 200, {status: true, token})
        

    }
    catch(error) {
        console.log(error)
        return responseHelpers(res, 500, {message: 'Internal server error'})
    }
}


module.exports = {registerGuru, getDataGuru, loginGuru}