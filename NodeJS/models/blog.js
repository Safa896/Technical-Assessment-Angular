const mongoose = require('mongoose');

var Blog = mongoose.model('Blog', {
    title: { type: String },
    content: { type: String },
    author: { type: String }
    
});

module.exports = { Blog };