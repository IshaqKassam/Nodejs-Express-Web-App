const express = require('express')
const chalk = require('chalk') //used to color texts - useful in console logging colored messages
// const debug = require('debug')('app')
const morgan = require('morgan')
const path = require('path')

const PORT = process.env.PORT || 3000

const app = express()

app.use(morgan('tiny'))
app.use(express.static(path.join(__dirname, '/public/')))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {title: 'Globomantics', data:['a', 'b', 'c']})
})

app.listen(PORT, () => {
    console.log(`Listening on Port ${chalk.green(PORT)}`)
})  
