var express = require('express');
const Player = require("../models/Player")
var router = express.Router();
const SelectedPlayer = require("../models/SelectedPlayer");
require('../models/SelectedPlayer');
const playerData = require("../data").playerData


router.get("/fetch-player", async function(req, res){
  const origin = req.get("origin")
  if (origin === "https://donnieandmooie.github.io"){
    res.setHeader("Access-Control-Allow-Origin", "https://donnieandmooie.github.io");
  }
  else{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
  }
  
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  const currentPlayer = await SelectedPlayer.findOne({})
    const savedDate = currentPlayer.timestamp.toDateString()
    if (savedDate === new Date().toDateString()){
      res.json(currentPlayer)
    }
    else{
      const randomIndex = Math.floor(Math.random() * playerData.length)
      const randomPlayer = playerData[randomIndex]
      const player =  new SelectedPlayer(randomPlayer)
      await SelectedPlayer.deleteOne({})
      await player.save()
      return res.json(randomPlayer)
    }

    
})

module.exports = router;
