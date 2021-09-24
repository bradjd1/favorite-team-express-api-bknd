const express = require("express");
const router = express.Router();

const TeamModel = require('../models').Team;
const PlayerModel = require('../models').Player;

//get all Teams
router.get('/', async (req, res) => {
    let teams = await TeamModel.findAll();
    console.log(teams);
    res.json({ teams });
});

//get Team profile
router.get('/profile/:id', async (req, res) =>{
    let team = await TeamModel.findByPk(req.params.id);
    res.json(team);
})


module.exports = router;