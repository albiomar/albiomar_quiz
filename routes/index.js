var express = require('express');
var router = express.Router();
var albiomar_quizController = require('../controllers/albiomar_quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/ventanas/question', albiomar_quizController.question);
router.get('/ventanas/answer', albiomar_quizController.answer);
router.get('/ventanas/author', albiomar_quizController.author);


module.exports = router;
