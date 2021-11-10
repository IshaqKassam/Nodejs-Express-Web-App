const express = require('express')
const chalk = require('chalk') //used to color texts - useful in console logging colored messages
// const debug = require('debug')('app')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send("hello from my app")
})

app.listen(3000, () => {
    console.log(`Listening on Port ${chalk.green(' 3000')}`)
})
