const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy
const User = mongoose.model('User')


let getUserInfo = function (user) {
    return {
        _id: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
    }
}

let strategy = function (username, password, done) {
  User.findOne({userName: username}).exec(function (err, user) {
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    if (!user.authenticate(password)) { return done(null, false) }

    return done(null, getUserInfo(user))
  })
}

let serialize = function (user, done) {
  if (user) {
    done(null, user._id)
  }
}

let deserialize = function (id, done) {
  User.findOne({_id: id}).exec(function (err, user) {
    if (err) { return done(err) }
    return (user) ? done(null, user) : done(null, false)
  })
}

module.exports = function () {
  passport.use(new LocalStrategy(strategy))
  passport.serializeUser(serialize)
  passport.deserializeUser(deserialize)
}
