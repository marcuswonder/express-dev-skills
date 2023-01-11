const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create
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

  function newSkill(req, res) {
    res.render('skills/new', {
      title: 'New Skill'
    })
  }

  function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
  }