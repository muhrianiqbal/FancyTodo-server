let {Todo} = require("../models");
// let {verify} = require("../helpers/jwt");

function authorization(req, res, next)
{
    let {id} = req.params;
    let {UserId} = req;
    Todo.findByPk({where : {id}})
    .then(data =>
    {
        if(!data)
            return res.status(404).json({error : "Data not found"});
        if(data.UserId == UserId)
            return next();
        return res.status(401).json({error : "Unauthorized"});
    })
    .catch(err => res.status(400).json({errors : err}));
}

module.exports = { authorization };