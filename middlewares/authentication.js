let {User} = require("../models");
let {verify} = require("../helpers/jwt");

function authentication(req, res, next)
{
    try 
    {
        let user = verify(req.headers.usertoken);
        if(user.iss == "accounts.google.com")
        {
            req.UserId = user.sub.slice(0, 5);
            return next();
        }
        else
        {
            User.findByPk(user)
            .then(data =>
            {
                if(!data)
                    return res.status(404).json({error : "You must Log in"});
                req.UserId = data.id;
                return next();
            })
            .catch(err => res.status(401).json({error : "Unauthorized"}));
        }
    } 
    catch(err) 
    {
        res.status(500).json({error : "Token error"});
    }
}

module.exports = { authentication };