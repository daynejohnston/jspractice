const session = require('express-session')
const SessionStore = require('connect-mongo')(session)

module.exports = function (config) {
    const HOUR = 3600000
    const STORE = new SessionStore({ url: config.db.uri })

    STORE.on('error', (err) => console.log(err))

    let options = {
        store: STORE,
        secret: config.secret,
        name: 'id',
        resave: false,
        saveUninitialized: false,
        cookie: {
            path: '/',
            httpOnly: true,
            secure: config.secure,
            maxAge: 24 * HOUR
        }
    }

    return options
}