const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//set up the express app
const app = express()
app.use(cors())

//set route

//fill routes


//parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//set up a default catch-all route
app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World'
}))

module.exports = app