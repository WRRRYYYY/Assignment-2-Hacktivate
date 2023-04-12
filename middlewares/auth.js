const { compareToken } = require('../helpers/jsonWebToken')
const fs = require('fs')
const path = require('path')

const auth = (req, res, next) => {
    try {
        const cred = req.headers.authorization

        if (!cred) {
            res.status(404).json({
                message: 'Token not provided'
            })
            return
        }

        const tokenAuthorization = req.headers.authorization.split(" ")[1]
        const authorization = compareToken(tokenAuthorization)

        fs.readFile(path.join(__dirname, '../data/users.json'), (err, data) => {
            if (err) {
                console.log(err);
                return
            }

            const raw = data.toString('utf8')
            const users = JSON.parse(raw)

            if (authorization.username === users[0].username) {
                return next()
            }
        })

    } catch (error) {
        res.status(error?.code || 500).json(error)
    }
}

module.exports = auth