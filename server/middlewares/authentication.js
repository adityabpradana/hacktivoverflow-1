const { verify } = require('../helpers/jwt')

module.exports = (req, res, next) => {
    if(req.headers.token){
        let decoded = verify(req.headers.token)
        if(decoded !== Error){
            req.decoded = decoded
            next()
        } else{
            next({ code: 401, message: 'Invalid Token' })
        }
    }else{
        next({ code: 400, message: 'No token'})
    }
}