


var mongoose = require("mongoose");

var todo = new mongoose.Schema({
	// userId : {type:String,required:true},
	projectName:{type:String,required:true},
	description:{type:String,required:true},
	created_at: {type: Date, default: Date.now},
	todos: [{
			name:{type:String,default:null},
			created_at: {type: Date, default: Date.now},
			status:{type:String,required:true,default:"uncompleted"}
	}]
});	

var todo = mongoose.model("todo",todo);
module.exports = todo;