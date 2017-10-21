const passport = require('passport')

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
      res.status(200).send({success: true, user: user})
    })
  })

  auth(req, res, next)
}

let logout = function (req, res) {
    req.logout()
    req.session.destroy()
    res.redirect('/')
}

module.exports = {
  authenticate: authenticate,
  logout: logout
}
