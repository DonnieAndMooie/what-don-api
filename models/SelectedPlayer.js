const mongoose = require("mongoose")
const { Schema } = mongoose


const clubSchema = new Schema({
    from: {type: Number, required: true},
    to: {type: Number},
    appearances: {type: Number, required: true},
    goals: {type: Number, required: true}
})

const selectedPlayerSchema = new Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, auto: true},
    name: {type: String, required: true},
    clubs: [clubSchema],
    picture: {type: String},
    age: {type: Number},
    position: {type: String},
    timestamp: { type : Date, default: Date.now }
}, {collection: "players"})

module.exports = mongoose.model("SelectedPlayer", selectedPlayerSchema, "SelectedPlayer")