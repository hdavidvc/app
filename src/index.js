const express = require('express')

// const pool = require('./db')

const app = express()

//Rutas
app.use(require('./routes/index'));


app.listen(3000)
console.log('Puerto interno: 3000 - externo: 5000 david')