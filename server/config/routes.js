const path = require('path')
const auth = require('./auth')

module.exports = (app, config) => {

    app.post('/login', auth.authenticate)
    app.post('/logout', auth.logout)
    app.get('/*', (req, res) => res.sendFile(path.join(`${config.rootPath}/dist/index.html`)))
}