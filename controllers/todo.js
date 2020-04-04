const {Todo} = require("../models");
const axios = require('axios');

class TodoController
{
    static create(req, res, next)
    {
        let {title, description, status, due_date} = req.body;
        let {UserId} = req;
        let data = {title, description, status, due_date, UserId};
        Todo.create(data)
        .then(data => res.status(201).json(data))
        .catch(err => 
        {
            return next(err);
        });
    }

    static showAll(req, res, next)
    {
        // console.log(req.UserId)
        Todo.findAll({where : {UserId : req.UserId}, order : [["id", "ASC"]]})
        .then(data => 
        {
            if(data[0] == undefined)
                return res.status(404).json({message : "U must create a Todo"})
            return res.status(200).json(data)
        })
        .catch(() => 
        {
            return next(err);
        });
    }

    static showDatum(req, res, next)
    {
        let {id} = req.params;

        Todo.findByPk(id)
        .then(data => 
        {
            if(data)
                return res.status(200).json(data);
            else
                return res.status(404).json({error : "Data not found"});
        })
        .catch(err => 
        {
            return next(err);
        });
    }

    static update(req, res, next)
    {
        let {title, description, status, due_date} = req.body;
        let data = {title, description, status, due_date};
        let {id} = req.params;
        
        Todo.update(data, {where : {id}})
        .then((value) => 
        {
            console.log(value)
            if(value[0] == [0])
                return res.status(404).json({error : "Data not found"});
            else
                return res.status(200).json(data);
        })
        .catch(err => 
        {
            return next(err)
        });
    }

    static delete(req, res, next)
    {
        let {id} = req.params;
        let data = {};

        Todo.findByPk(id)
        .then(value => 
        {
            if(value == null)
                return res.status(404).json({error : "Data not found"});
            else
            {
                data = value;
                return Todo.destroy({where : {id}})
            }
        })
        .then(() => res.status(200).json(data))
        .catch(err => 
        {
            return next(err);
        });  
    }

    static weather(req, res, next)
    {
        axios.get(`http://api.airvisual.com/v2/nearest_city?key=${process.env.YOUR_API_KEY}`)
        .then(function (response) {
          return res.status(200).json(response.data.data);
        })
        .catch(function (err) {
          return next(err)
        })
    }
}

module.exports = TodoController;