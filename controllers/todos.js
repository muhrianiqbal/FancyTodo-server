const {Todo} = require("../models");

class TodoController
{
    static create(req, res)
    {
        let {title, description, status, due_date} = req.body;
        let data = {title, description, status, due_date};
        Todo.create(data)
        .then(data => res.status(201).json(data))
        .catch(err => 
        {
            if(err.name == "SequelizeValidationError")
                res.status(400).json(err);
            else
                res.status(500).json({error : "Internal Server Error"});
        });
    }

    static showAll(req, res)
    {
        Todo.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({error : "Internal Server Error"}));
    }

    static showDatum(req, res)
    {
        let {id} = req.params;

        Todo.findByPk(id)
        .then(data => 
        {
            if(data)
                res.status(200).json(data);
            else
                res.status(404).json({error : "Data not found"});
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
                res.status(404).json({error : "Data not found"});
            else
                res.status(200).json(data);
        })
        .catch(err => 
        {
            if(err.name == "SequelizeValidationError")
                res.status(400).json(err);
            else
                res.status(500).json({error : "Internal Server Error"});
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
                    res.status(404).json({error : "Data not found"});
                else
                {
                    data = value;
                    return Todo.destroy({where : {id}})
                    .then(() => res.status(200).json(data))
                }
            })
        .catch(err => res.status(500).json({error : "Internal Server Error"}));
    
    }
}

module.exports = TodoController;