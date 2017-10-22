const path = require('path')
const auth = require('../authorization/auth')

module.exports = (app, config) => {

    app.post('/login', auth.authenticate)
    app.get('/logout', auth.logout)
    app.get('/*', 
            auth.requiresAuth(), 
            (req, res) => res.sendFile(path.join(`${config.rootPath}/dist/index.html`)))
}