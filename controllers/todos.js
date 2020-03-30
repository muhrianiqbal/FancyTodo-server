const {Todo} = require("../models");

class TodoController
{
    static create(req, res)
    {
        let {title, description, status, due_date} = req.body;
        let data = {title, description, status, due_date};
        Todo.create(data)
        .then(data => res.status(201).json(data))
        // .catch(err => res.status(400).json(err));
        .catch(err => res.json(err));
    }

    static showAll(req, res)
    {
        Todo.findAll()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
    }

    static showDatum(req, res)
    {
        let {id} = req.params;

        Todo.findByPk(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
    }

    static update(req, res)
    {
        let {title, description, status, due_date} = req.body;
        let data = {title, description, status, due_date};
        let {id} = req.params;
        
        Todo.update(data, {where : {id}})
        .then(() => res.status(200).json(data))
        .catch(err => res.json(err));
    }

    static delete(req, res)
    {
        let {id} = req.params;
        let data = {};

        Todo.findByPk(id)
        .then(value => 
            {
                data = value;
                return Todo.destroy({where : {id}})
            })
            .then(() => res.status(200).json(data))
            .catch(err => res.json(err));
    
    }
}

module.exports = TodoController;