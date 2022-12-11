const {response, request} = require('express');

const userGet = (req=request, res=response) =>{
    const {nombre} = req.query;

    res.json({
        msg: 'get API - controller',
        nombre
    });
};

const userPost = (req, res=response) =>{

    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - controller',
        nombre,
        edad
    });
}

const userPut = (req, res=response) =>{

    const id = req.params.id;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const userDelete = (req, res=response) =>{
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports={
    userGet,
    userPost,
    userPut,
    userDelete
}