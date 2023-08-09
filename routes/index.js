var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Authentification using node.js' });
});


// Get route_to_Inscription interface
router.get("/routeToInscription",
  function (req, res, next) {
    res.render("inscription/index", {
      title: "Inscrivez-vous"
    })
  });

module.exports = router;
