
var path = require('path');
var project = require(path.join(__dirname, '..', 'models', 'projects'))
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

var createProject = function(req,res,next){
	if(req.body){
		var newProject = new project(req.body)
		newProject.save(function(err,data){
			if(err){
				res.send(err);
				return next();
			}
			else{
				res.send(data);
				return next();
			}
		})
	}else{
		 next({error:"error while parsing the body"});
	}
}

var getProjects = function(req,res,next){
	if(req.body){
		project.find({},function(err,data){
			res.send(data);
			return next();
		})
	}else{
		next({error:"error while parsing the body"});
	}
}

var updateProject = function(req,res,next){
	if(req.body){
		newProject.update({_id:ObjectId(req.body.id)},{$set:{todos:req.body.todos}},function(err,data){
			if(err){
				res.send(err);
				return next();
			}
			else{
				res.send(data);
				return next();
			}
		})
	}else{
		next({error:"error while parsing the body"});
	}
}

var insertTodo = function(req,res,next){
	if(req.body){
		project.update({_id:ObjectId(req.body.projectId)},{$push:{todos:req.body.data}},function(err,update){
			if(err){
				next(err);
			}
			res.send(update);
			return next();
		})
	}else{
		next({error:"error while parsing the body"});
	}
}

var getTodos = function(req,res,next){
	if(req.body){
		project.find({_id:ObjectId(req.body.projectId)},{todos:1},function(err,data){
			if(err){
				next(err);
			}
			res.send(data);
			return next();
		})
	}else{
		next({error:"error while parsing the body"});
	}
}

exports.createProject = createProject;
exports.getProjects = getProjects;
exports.updateProject = updateProject;
exports.insertTodo = insertTodo
exports.getTodos = getTodos;

// var obj = {
// 	projectName:"name",
// 	description:"description",
// 	todos: []
// }
// createProject(obj)