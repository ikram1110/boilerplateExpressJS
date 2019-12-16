const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

//set up the express app
const app = express()
app.use(cors())

//set route
const authRoute = require('../routes/auth')
const masterRoute = require('../routes/master')

//parse incoming requests data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//fill routes
app.use('/auth', authRoute)

app.use(function (req, res, next) {
  let token = req.headers.authorization || ''
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" // fix ssl not secure
  let headers = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": token
    },
    responseType: 'json'
  }

  axios.post('http://localhost:9000/auth/validation', null, headers)
  .then(function(res) {
    if(res.data.result.type == 'member') {
      app.use('/master', masterRoute)
    }
    next()
  })
  .catch(function (err) {
    console.log(err.response.status)
    res.status(err.response.status).send(err.response.data)
  })
})

//set up a default catch-all route
app.get('/', (req, res) => res.status(200).send({
  message: 'Hello World'
}))

module.exports = app