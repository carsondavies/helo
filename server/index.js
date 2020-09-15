require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const controller = require('./controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
  })
)

app.post('/auth/register', controller.register)
app.post('/auth/login', controller.login)
app.get('/api/posts', controller.getPosts)


massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(dbInstance => {
    app.set('db', dbInstance)
    console.log('WHAT IT DO DB')
    app.listen(SERVER_PORT, () =>
      console.log(`listening on port ${SERVER_PORT}`))
  })