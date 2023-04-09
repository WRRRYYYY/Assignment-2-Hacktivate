const express = require('express')
const router = express.Router()
const { getTeacher } = require('../controller/Tcontroller')

router.get('/', getTeacher)

module.exports = router