
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Enchère = new Schema({
    todo_description: {
        type: String
    },
    todo_price: {
        type: String
    },
    todo_id: {
        type: String
    },
    todo_title: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);
