// Get /ventanas/question de index.js
var models = require('../models/models.js');
exports.question = function (req, res) {
	models.Quiz.findAll().success(function(quiz){
	res.render ('ventanas/question', {pregunta: quiz[0].pregunta});
	})
};
// Get /ventanas/answer de index.js
exports.answer = function (req, res) {
	models.Quiz.findAll().success(function(quiz){
		if (req.query.respuesta === quiz[0].respuesta) {
			res.render ('ventanas/answer', {respuesta: 'Correcto'});
		} else {
			res.render ('ventanas/answer', {respuesta: 'Incorrecto'});
		}
	})
};
exports.author = function (req, res){
	res.render ('ventanas/author')
}