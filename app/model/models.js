const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    content: String,
    songs: String
},
    {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);