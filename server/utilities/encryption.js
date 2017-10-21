const crypto = require('crypto')

let createSalt = () => crypto.randomBytes(128).toString('base64')
  
let hashPwd = function (salt, pwd) {
    let hmac = crypto.createHmac('sha256', salt)
    
    hmac.setEncoding('hex')
    hmac.write(pwd)
    hmac.end()
    
    return hmac.read()
}

module.exports = {
    createSalt: createSalt,
    hashPwd: hashPwd
}


