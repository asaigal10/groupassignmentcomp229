let mongoose = require('mongoose');

// create a model class
let tournamentModel = mongoose.Schema({
    playerID: Number,
    userName: String,
    gameName: String,
    region: String,
    date: String
},
{
    collection: "tournaments"
});

module.exports = mongoose.model('Tournament', tournamentModel);