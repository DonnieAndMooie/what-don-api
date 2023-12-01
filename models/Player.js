const mongoose = require("mongoose")
const { Schema } = mongoose


const clubSchema = new Schema({
    from: {type: Number, required: true},
    to: {type: Number},
    appearances: {type: Number, required: true},
    goals: {type: Number, required: true},
    team: {type: String, required: true},
    loan: {type: Boolean, required: true}
})

const playerSchema = new Schema({
    id: {type: mongoose.Schema.Types.ObjectId, required: true, auto: true},
    name: {type: String, required: true},
    clubs: [clubSchema],
    picture: {type: String},
    age: {type: Number},
    position: {type: String},
}, {collection: "players"})

module.exports = mongoose.model("Player", playerSchema)