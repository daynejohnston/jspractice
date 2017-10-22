const express = require('express')
const app = express()
const config = require('./server/config/config')
const store = require('./server/config/connectmongo')(config)

process.on('unhandledRejection', r => console.log(r));

require('./server/config/mongoose')(config)
require('./server/authorization/passport')()

require('./server/config/express')(app, config, store)


