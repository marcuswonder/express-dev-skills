const Skill = require('../models/skill')

module.exports = {
    index
}

function index(req, res) {
    res.render('skills/index', {
      todos: Skill.getAll()
    });
  }