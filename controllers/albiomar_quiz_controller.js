// Get /ventanas/question de index.js
var models = require('../models/models.js');

exports.load = function (req, res, next, quizId) {
	models.Quiz.find(quizId).then(
		function(quiz){
			if (quiz) {
				req.quiz = quiz;
				next();
			} else { next(new Error('No existe quizId=' + quizId));}
		}
	).catch(function(error) {next(error);});
	
};

exports.index = function (req, res) {
	models.Quiz.findAll().then(
		function(quizes){
		res.render ('ventanas/index', {quizes: quizes});
		}
	).catch(function(error) {next(error);})
};

exports.show = function (req, res) {
		res.render ('ventanas/show', {quiz: req.quiz});
};
// Get /ventanas/answer de index.js
exports.answer = function (req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta) {
		resultado ='Correcto';
	}
	res.render ('ventanas/answer', {quiz: req.quiz, respuesta: resultado});
};
exports.author = function (req, res){
	res.render ('ventanas/author')
}