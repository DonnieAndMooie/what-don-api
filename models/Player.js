const mongoose = require("mongoose")
const { Schema } = mongoose


const clubSchema = new Schema({
    name: {type: String, required: true},
    from: {type: Date, required: true},
    to: {type: Date, required: true}
})

const playerSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    clubs: [clubSchema]
})

module.exports = mongoose.model("Player", playerSchema)