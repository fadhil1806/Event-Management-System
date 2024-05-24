const bcrypt = require('bcrypt')

async function comparePassword(password, hashPassword) {
    return bcrypt.compareSync(password, hashPassword)
}

async function hashPassword(password) {
    return bcrypt.hashSync(password, 12)
}

module.exports = {comparePassword, hashPassword}