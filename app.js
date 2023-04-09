const express = require('express')
const app = express()
const PORT = 3000

const routerGlobal = require('./routes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routerGlobal)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to trial JsonWebToken' })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong' })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})