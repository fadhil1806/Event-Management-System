const guru = require("../db/tables/guru")

async function getDataGuruByUsername(username) {
    try {
        const dataGuru = await guru.findOne({
            where: {username},
            attributes: {exclude: ['createdAt', 'updatedAt']}
        })
        return dataGuru
    }
    catch(error) {

    }
}

async function getDataGuruByID(id) {
    try{
        const dataGuru = await guru.findOne({
            where: {id},
            attributes: {exclude: ['createdAt', 'updatedAt']}
        })
        return dataGuru
 
    }
    catch(error){

    }
}

module.exports = {getDataGuruByUsername, getDataGuruByID}