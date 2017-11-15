const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

module.exports = (app, config, store) => {

    app.use(cookieParser(config.secret))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(session(store))
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(express.static(`${config.rootPath}/dist`))
    require('./routes')(app, config)
    app.listen(process.env.PORT || 8080)
}
