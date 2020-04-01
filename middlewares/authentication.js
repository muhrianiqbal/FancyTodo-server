let {User} = require("../models");
let {verify} = require("../helpers/jwt");

function authentication(req, res, next)
{
    try 
    {
        let user = verify(req.headers.usertoken);
        User.findByPk(user)
        .then(data =>
        {
            if(!data)
                return res.status(404).json({error : "You must Log in"});
            req.UserId = data.id;
            next();
        })
        .catch(err => res.status(401).json({error : "Unauthorized"}));
    } 
    catch(err) 
    {
        res.status(500).json({error : "Token error"});
    }
}

module.exports = { authentication };