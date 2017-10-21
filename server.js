const express = require('express')
const app = express()
const config = require('./server/config/config')
const store = require('./server/config/connectmongo')(config)

require('./server/config/mongoose')(config)
require('./server/config/passport')()

require('./server/config/express')(app, config, store)


