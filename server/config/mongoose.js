const mongoose = require('mongoose')
const userModel = require('../mongoose/models/User')
require('../mongoose/models/Character')
const bluebird = require('bluebird')


module.exports = function(config) {
    mongoose.Promise = bluebird
    mongoose.connect(config.db.uri, {
        useMongoClient: true,
        promiseLibrary: bluebird
    })
    let db = mongoose.connection

    db.on('error', (err) => console.log(err))
    db.once('open', () => console.log('db connection established'))

    userModel.createDefaultUsers()
}