const express = require('express')
const router = express.Router()
const { login } = require('../controller/Acontroller')

router.post('/', login)

module.exports = router