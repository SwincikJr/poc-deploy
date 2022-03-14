const express = require('express')
const app = express()

const controller = require('./src/controller')
const crash = require('./src/crash')

app.get('', controller)
app.get('/force-crash', crash)

module.exports = app
