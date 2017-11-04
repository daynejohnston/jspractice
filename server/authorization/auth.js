const passport = require('passport')

let createReturnUser = function (user) {
  let responseUser = {}
  responseUser._id = user._id
  responseUser.username = user.username
  responseUser.firstName = user.firstName
  responseUser.lastName = user.lastName
  return responseUser
}

let authenticate = function (req, res, next) {
  if (req.body.username) {
    req.body.username = req.body.username.toLowerCase()
  }

  let auth = passport.authenticate('local', function (err, user) {
    if (err) { return next(err) }
    if (!user) { res.send({ success: false }) }

    req.login(user, function (err) {
      if (err) { return next(err) }
      req.session.user = user
      res.status(200).send({success: true, user: createReturnUser(user)})
    })
  })

  auth(req, res, next)
}

let logout = function (req, res) {
    req.logout()
    // the callback on destroy seems to be needed due to a bug with mongo-connect
    // if the callback isn't provided, an error is thrown indicating that cb is not a function
    req.session.destroy((err) => {
      if (err) { console.log(err) }
    })
    res.redirect('/login')
}

let requiresAuth = function () {
  return function (req, res, next) {
    if (req.url === '/login') { return next() }

    if (!req.isAuthenticated()) {
      res.redirect('/login')
    } else {
      next()
    }
  }
}

module.exports = {
  authenticate: authenticate,
  logout: logout,
  requiresAuth: requiresAuth
}
