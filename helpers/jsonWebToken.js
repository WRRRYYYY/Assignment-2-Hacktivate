let jsonWebToken = require('jsonwebtoken')
const key = 'assignment 2'

const generateToken = (payload) => {
    return jsonWebToken.sign(payload, key)
}

const compareToken = (token) => {
    return jsonWebToken.verify(token, key)
}

module.exports = { generateToken, compareToken }