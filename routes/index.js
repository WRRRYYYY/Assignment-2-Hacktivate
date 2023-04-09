const express = require('express')
const router = express.Router()
const Arouter = require('./Arouter')
const Trouter = require('./Trouter')
const auth = require('../middlewares/auth')

router.use('/login', Arouter)
router.use(auth)
router.use('/teachers', Trouter)

module.exports = router