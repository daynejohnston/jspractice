const path = require('path')
const auth = require('../authorization/auth')
const users = require('../controllers/users')
const characters = require('../controllers/characters')

module.exports = (app, config) => {

    app.get('/api/character', auth.requiresAuth(), characters.getAll)
    app.get('/api/character/:id', auth.requiresAuth(), characters.getById)
    app.put('/api/character', auth.requiresAuth(), characters.update)
    app.delete('/app/character/:id', auth.requiresAuth(), characters.remove)

    app.post('/login', auth.authenticate)
    app.put('/users/register', users.register)
    app.get('/logout', auth.logout)
    app.get('/*', 
            auth.requiresAuth(), 
            (req, res) => res.sendFile(path.join(`${config.rootPath}/dist/index.html`)))
            
}