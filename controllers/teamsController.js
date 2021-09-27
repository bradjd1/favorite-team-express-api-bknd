const express = require("express");
const router = express.Router();

const TeamModel = require('../models').Team;
const PlayerModel = require('../models').Player;

//get Team profile
router.get('/profile/:id', async (req, res) =>{
    let team = await TeamModel.findByPk(req.params.id, {
        include: PlayerModel
    });
    res.json(team);
});

//get all Teams
router.get('/', async (req, res) => {
    let teams = await TeamModel.findAll({include: PlayerModel})
    res.json({ teams });
});

//create a Team
router.post('/', async (req, res) => {
    let team = await TeamModel.create(req.body);
    team.dataValues.Players = [];
    // team = await TeamModel.findByPk(team.id, {
    //     include: PlayerModel
    // });
    res.json({ team });
});

//update a team
router.put('/:id', async (req, res) => {
    let team = await TeamModel.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    });
    res.json(team);
})

//delete a team
router.delete('/:id', async (req, res) => {
    let team = await TeamModel.destroy({
        where: { id: req.params.id},
    });
    res.json({
        message: `Team with id ${req.params.id} deleted`
    })
})

//create a player
router.post('/:id/players', async (req, res) => {
    let player = await PlayerModel.create(req.body);
    let team = await TeamModel.findByPk(req.params.id, {
        include: PlayerModel
    });
    res.json({ team });
})

//delete a player
router.delete('/:teamId/players/:id', async (req, res) => {
    let player = await PlayerModel.destroy({
        where: {id: req.params.id},
    })
    console.log('in del player ',req.params.id, player)
    res.json({message: `Player with id ${req.params.id} deleted`})
})

module.exports = router;