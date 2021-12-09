const express = require('express')
const app = express()

const controller = require('./src/controller')

app.get('', controller)

module.exports = app
