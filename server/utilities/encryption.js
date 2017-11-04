var crypto = require('crypto')

const createSalt = () =>  { return crypto.randomBytes(128).toString('base64') }

const hashPwd = (salt, pwd) => {
  var hmac = crypto.createHmac('sha256', salt)
  
  hmac.setEncoding('hex')
  hmac.write(pwd)
  hmac.end()
  
  return hmac.read()
}

module.exports = {
    createSalt: createSalt,
    hashPwd: hashPwd
}