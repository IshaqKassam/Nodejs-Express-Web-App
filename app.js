const express = require('express')
const chalk = require('chalk') //used to color texts - useful in console logging colored messages

const app = express()


app.get('/', (req, res) => {
    res.send("hello from my app")
})

app.listen(3000, () => {
    console.log("Listening on Port" + chalk.green(' 3000'))
})
