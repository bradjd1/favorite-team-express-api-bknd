const express = require("express");
const router = express.Router();

const TeamModel = require('../models').Team;
const PlayerModel = require('../models').Player;

//get all Teams
router.get('/', async (req, res) => {
    let teams = await TeamModel.findAll();
    res.json({ teams });
});

//get Team profile
router.get('/profile/:id', async (req, res) =>{
    let team = await TeamModel.findByPk(req.params.id);
    res.json(team);
});

//create a Team
router.post('/', async (req, res) => {
    let team = await TeamModel.create(req.body);
    console.log('in post',team,req.body)
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
module.exports = router;