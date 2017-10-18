var express = require('express');
var router = express.Router();

var projectCtrl = require("../controllers/projectController");

/* GET home page. */
router.post('/createProject', projectCtrl.createProject);
router.get('/getProjects', projectCtrl.getProjects);
router.post('/updateProject', projectCtrl.updateProject);
router.post('/insertTodo', projectCtrl.insertTodo);
router.post('/getTodos', projectCtrl.getTodos);


module.exports = router;
