var express = require('express');
var router = express.Router();
var albiomar_quizController = require('../controllers/albiomar_quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.param('quizId', albiomar_quizController.load);

router.get('/ventanas/index',  albiomar_quizController.index);
router.get('/ventanas/:quizId(\\d+)', albiomar_quizController.show);
router.get('/ventanas/:quizId(\\d+)/answer', albiomar_quizController.answer);
router.get('/ventanas/author', albiomar_quizController.author);


module.exports = router;
