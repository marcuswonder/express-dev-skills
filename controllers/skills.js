const Skill = require('../models/skill')

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });
  }

  function show(req, res) {
    // console.log(req.params.skill)
    res.render('skills/show', {
      skill: Skill.getOne(req.params.skill),
    })
  }