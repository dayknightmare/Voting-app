import jwt = require('jsonwebtoken');

const genToken = (data: object) => {
    return jwt.sign(data, "kaizokuOu")
}

const openToken = (token: string, key: string = "kaizokuOu") => {
    return jwt.verify(token, key, (err, decode) => {
        if (err){
            throw err;
        }

        return decode;
    })
}

export { genToken, openToken };