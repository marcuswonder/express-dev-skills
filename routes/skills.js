var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills" already
// No need to include in paths again

// GET /todos
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:skill', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:skill', skillsCtrl.delete);



module.exports = router;
