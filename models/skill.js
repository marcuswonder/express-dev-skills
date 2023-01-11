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
  }
  
  function getAll() {
    return skills;
  }

  function getOne(name) {
    return skills.find(s => s.skill === name)
  }
  