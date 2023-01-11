var express = require('express');
var router = express.Router();

 // Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills" already
// No need to include in paths again

// GET /todos
router.get('/', skillsCtrl.index)
router.get('/:skill', skillsCtrl.show)

module.exports = router;
