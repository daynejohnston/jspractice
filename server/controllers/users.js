const User = require('mongoose').model('User');
const encrypt = require('../utilities/encryption');

function saltPassword(data) {
    data.username = data.username.toLowerCase()
    data.salt = encrypt.createSalt()
    data.hashed_pwd = encrypt.hashPwd(data.salt, data.password)

    return data;
}

function userExists(err) {
    return err.toString().indexOf('E11000') > 1
}

let createReturnUser = function (user) {
    let responseUser = {}
    responseUser._id = user._id
    responseUser.username = user.username
    responseUser.firstName = user.firstName
    responseUser.lastName = user.lastName
    return responseUser
}

const register = function (req, res, next) {
    let userData = saltPassword(req.body);
    
    User.create(userData, (err, user) => {
        if (err) {
            if (userExists(err)) { err = new Error('Duplicate Username') }
            res.status(400)
            return res.send({ reason: err.toString() })
        }

        req.login(user, (err) => {
            if (err) { return next(err) }
            req.session.user = user
            res.status(200).send({success: true, user: createReturnUser(user)})
          })
    })

}

module.exports = {
    register: register
}