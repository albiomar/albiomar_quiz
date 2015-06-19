// Get /ventanas/question de index.js
exports.question = function (req, res) {
	res.render ('ventanas/question', {pregunta: 'Capital de Italia'});
};
// Get /ventanas/answer de index.js
exports.answer = function (req, res) {
	if (req.query.respuesta === 'Roma') {
		res.render ('ventanas/answer', {respuesta: 'Correcto'});
	} else {
		res.render ('ventanas/answer', {respuesta: 'Incorrecto'});
	}
}