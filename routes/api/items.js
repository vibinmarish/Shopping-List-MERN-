const express = require('express');
const router = express.Router();

//Item model
const Item = require('../../models/Item');  // .. is to go back to api folder then .. to go back to router folder.


router.get('/',(req,res) => {
    Item.find()
        .sort({ date:-1})
        .then(items => res.json(items));
}); //we are just using '/' because the route is already set in serve.js file. otherwise we have to include '/api/items'.


router.post('/',(req,res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item =>res.json(item));
}); //we have to create a new variable and store the name in it and then we use save() to store it as json


//for delete we use :id because we have to send the audo generated unique id for each record to delete it
router.delete('/:id',(req,res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(()=> res.json({success:true})))
    .catch(err => res.status(404).json({success:flase}));
}); //{success:true} this can be written as anything. It is just to display something when we delete it.


module.exports = router; 