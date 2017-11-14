const mongoose = require('mongoose')
const encrypt = require('../../authorization/encryption')

const userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH} is required!',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required!'},
  hashed_pwd: {type: String, required: '{PATH} is required!'},
  roles: [String]
})

userSchema.methods = {
  authenticate: function (passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd
  },
  hasRole: function (role) {
    return this.roles.indexOf(role) > -1
  }
}

let User = mongoose.model('User', userSchema)

function createDefaultUsers () {
  User.find({}).exec(function (err, collection) {
    if (err) { console.log(err) }
    if (collection.length === 0) {
      var salt, hash
      salt = encrypt.createSalt()
      hash = encrypt.hashPwd(salt, 'admin')
      User.create({
        firstName: 'Admin',
        lastName: 'Admin',
        username: 'admin@example.com',
        salt: salt,
        hashed_pwd: hash,
        roles: ['admin']
      })
    }
  })
}

module.exports = {
    createDefaultUsers: createDefaultUsers
  }