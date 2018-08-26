const express = require('express')
const consign = require('consign')
const mongoose = require('mongoose')
const logger = require('morgan')

var correios = require('node-correios'),
    correios = new correios();

correios.consultaCEP({cep:'58419270'},function(err,res){
    console.log(res)
});

mongoose.connect('mongodb://localhost/praca')
    .then(() => { console.log('Connected on database praca...') })
    .catch((err) => { console.log('Connection failed') })

const app = express()

app.use(logger('dev'))

app.use(express.json())

consign()
    .include('controllers')
    .then('routes')
    .into(app)

app.use((req, res, next) => {
    const err = new Error('Resource not found')
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).send({ message: err.message })
})

const port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Server listen on port ${port}...`) })