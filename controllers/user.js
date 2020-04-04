let {User} = require("../models");
let {getToken} = require("../helpers/jwt");
let {decrypt} = require("../helpers/bcrypt");
const {OAuth2Client} = require('google-auth-library');

class UserController
{
    static login(req, res)
    {
        let {email, password} = req.body;
        User.findOne({where : {email}})
        .then(data =>
        {
            if(!data)
                return res.status(404).json({error : "Invalid email / password"});
            
            if(!decrypt(password, data.password))
                return res.status(404).json({error : "Invalid email / password"});
            
            let token = getToken(data.dataValues.id);
            req.headers.usertoken = token;
            return res.status(200).json({accessToken : token});
        })
        .catch(err => res.status(400).json({errors : err}));
    }

    static register(req, res)
    {
        let {email, password} = req.body;
        let data = {email, password};
        
        User.create(data)
        .then(value => res.status(201).json(
            {
                id : value.id,
                email : value.email,
                password : value.password
            }
        ))
        .catch(err => res.status(400).json({errors : err}));
    }

    static googleSign(req, res)
    {
        const client = new OAuth2Client(process.env);
        client.verifyIdToken({
            idToken : req.body.id_token,
            audience : process.env.ClientID
        })
        .then(data =>
        {
            // console.log(data);
            if(!data)
                return res.status(404).json({error : "Invalid email / password"});
                        
            let token = getToken(data.payload);
            req.headers.usertoken = token;
            // return User.findOne({Where : {id : data.payload.sub}})
            return res.status(200).json({accessToken : token})
        })
        // .then(user =>
        // {
        //     if(!user)
        //     {

        //     }
        // })
        .catch(err =>
        {
            console.log(err);   
            return res.status(500).json({error : err})
        })
    }
}

module.exports = UserController;