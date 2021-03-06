const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Blog } = require('../models/blog');

// => localhost:3000/blogs/
router.get('/', (req, res) => {
    Blog.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in fetching Blogs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Blog.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in fetching blogs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/create', (req, res) => {
    var bg = new Blog({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        
    });
    bg.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error  :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;