
const express = require('express');
const router = express.Router();
const Producto = require('../tidi/producto');

// get a list of product from the database
router.get('/producto',function(req,res,next){
    Producto.find({}).then(function(producto){
        res.send(producto);
    }).catch(next);
});


// add a new producto to database
router.post('/producto',function(req,res,next){
    Producto.create(req.body).then(function(producto){
        res.send(producto);
    }).catch(next);
});

//PUT operator
router.put('/producto/:id', function(req, res){
    res.send({type: 'PUT'});
});

//DELETE operator
router.delete('/producto/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;

