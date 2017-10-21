const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
    rootPath: rootPath,
    port: process.env.PORT || 8080,
    db: {
        uri: 'mongodb://localhost/jspractice',
        sessions: 'sessions'
    },
    secret: 'this is my cookie secret',
    secure: false
}