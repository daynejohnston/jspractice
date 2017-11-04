const path = require('path')
const auth = require('../authorization/auth')
const users = require('../controllers/users')

module.exports = (app, config) => {

    app.post('/login', auth.authenticate)
    app.put('/users/register', users.register)
    app.get('/logout', auth.logout)
    app.get('/*', 
            auth.requiresAuth(), 
            (req, res) => res.sendFile(path.join(`${config.rootPath}/dist/index.html`)))
            
}