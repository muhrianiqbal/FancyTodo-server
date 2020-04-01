let jwt = require('jsonwebtoken');

function getToken(data)
{
    return jwt.sign(data, process.env.KEY);
}

function verify(token)
{
    return jwt.verify(token, process.env.KEY);
}

module.exports = {getToken, verify};