const { name } = require("ejs");

const skills = [
    {skill: 'server', proficiency: 1, comfort: 0, confidence: 10},
    {skill: 'routes', proficiency: 1, comfort: 0, confidence: 10},
    {skill: 'views', proficiency: 1, comfort: 0, confidence: 10},
    {skill: 'controllers', proficiency: 1, comfort: 0, confidence: 10},
    {skill: 'models', proficiency: 1, comfort: 0, confidence: 10}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  }
  
  function getAll() {
    return skills;
  }

  // function getOne(name) {
  //   return skills.find(s => s.skill === name)
  // }

  function getOne(skill) {
    return skills.find(s => s.skill === skill)
  }

  function create(skill) {
    skill.name = name
    skill.proficiency = 1
    skill.comfort = 1
    skill.confidence = 10
    skills.push(skill)
  }
  
  function deleteOne(skill) {
    const idx = skills.findIndex(s => s.skill === skill)
    skills.splice(idx, 1)
  }