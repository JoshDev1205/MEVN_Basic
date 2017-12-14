const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()
const itemRoutes = require('./routes/item')

// Mongoose Connection
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mevn-stack', {
  useMongoClient: true
})
.then(() => console.log('db Connected'))
.catch(err => console.log(err))

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/item', itemRoutes)

// Static Files
app.use(express.static(path.join(__dirname, 'public')))


app.listen(app.get('port'),() => {
  console.log(`Server On Port: ${app.get('port')}`)
})