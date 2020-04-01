const {Todo} = require("../models");

class TodoController
{
    static create(req, res)
    {
        let {title, description, status, due_date} = req.body;
        let {UserId} = req;
        let data = {title, description, status, due_date, UserId};
        Todo.create(data)
        .then(data => res.status(201).json(data))
        .catch(err => 
        {
            if(err.name == "SequelizeValidationError")
                return res.status(400).json(err);
            else
                return res.status(500).json({error : "Internal Server Error"});
        });
    }

    static showAll(req, res)
    {
        // console.log(req.UserId)
        Todo.findAll({where : {UserId : req.UserId}})
        .then(data => 
        {
            if(data[0] == undefined)
                return res.status(404).json({message : "U must create a Todo"})
            return res.status(200).json(data)
        })
        .catch(() => res.status(500).json({error : "Internal Server Error"}));
    }

    static showDatum(req, res)
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
        .catch(err => res.status(500).json({error : "Internal Server Error"}));
    }

    static update(req, res)
    {
        let {title, description, status, due_date} = req.body;
        let data = {title, description, status, due_date};
        let {id} = req.params;
        
        Todo.update(data, {where : {id}})
        .then((value) => 
        {
            if(value[0] == [0])
                return res.status(404).json({error : "Data not found"});
            else
                return res.status(200).json(data);
        })
        .catch(err => 
        {
            if(err.name == "SequelizeValidationError")
                return res.status(400).json(err);
            else
                return res.status(500).json({error : "Internal Server Error"});
        });
    }

    static delete(req, res)
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
        .catch(err => res.status(500).json({error : "Internal Server Error"}));
    
    }
}

module.exports = TodoController;