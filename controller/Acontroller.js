const fs = require('fs')
const { generateToken } = require('../helpers/jsonWebToken')

module.exports = {
    login: (req, res) => {
        fs.readFile('../LatRestAPI/data/users.json', (err, data) => {
            if (err) {
                console.log(err);
                return
            }

            const raw = data.toString('utf8')
            const users = JSON.parse(raw)
            const { username, password } = req.body
            const isAuth = username === users[0].username && password === users[0].password

            if (isAuth) {
                try {
                    const payload = {
                        id: users[0].id,
                        username: users[0].username
                    }

                    const token = generateToken(payload)
                    res.status(200).json({
                        message: 'Succes login',
                        token
                    })

                } catch (error) {
                    res.status(error?.code || 500).json(error)
                }
            }

        })
    }
}