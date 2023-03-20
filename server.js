const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
var hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials/', function () {
  console.log('Partials registered')
})
require('dotenv').config()
app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'hbs')
hbs.registerHelper('ifEquals', function (arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this)
})
app.use('/code_compiler', require('./routes/code_executer'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Listening onport ${port} http://localhost:${port}`)
})
