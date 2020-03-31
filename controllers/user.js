let jwt = require('express-jwt');

class UserController
{
    static login(req, res)
    {
        let {email, password} = req.body;

        Todo.findOne({where : {email}})
        .then()
    }

    static register(req, res)
    {
        let {email, password} = req.body;
        let data = {email, password};
        
        Todo.create(data)
        .then()
    }
}