const path = require('path')
const auth = require('../authorization/auth')
const users = require('../controllers/users')
const characterRouter = require('./routes/characterRoutes')()
const encounterRouter = require('./routes/encounterRoutes')()

const routes = function (app, config) {

    app.use('/api/characters', auth.requiresAuth(), characterRouter)
    app.use('/api/encounters', auth.requiresAuth(), encounterRouter)
    
    app.post('/login', auth.authenticate)
    app.put('/users/register', users.register)
    app.get('/logout', auth.logout)
    app.get('/*', 
            auth.requiresAuth(), 
            (req, res) => res.sendFile(path.join(`${config.rootPath}/dist/index.html`)))
                
}

module.exports = routes