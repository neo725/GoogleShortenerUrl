'use strict';

let config = require('./config.json'),
    express = require('express'),
    cors = require('cors'),
    app = express(),
    server = require('http').createServer(app),
    port = process.env.PORT || config.PORT,
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let route = require('./routes')
route(app)

server.listen(port)

console.log(`gurl api server listen on: ${port}`)