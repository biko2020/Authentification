var express = require('express');
var router = express.Router();


// call a controller
var controller = require('../controllers/action_Save_User');


// GET home page.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Authentification using node.js' });
});


// Get route_to_Inscription ,interface d'inscription
router.get("/routeToInscription",
  function (req, res, next) {
    res.render("inscription/index", {
      title: "Inscrivez-vous"
    });
  });


// Get route_To_Registration_By_Email  ,formulaire inscription par e-mail
router.get("/routeToRegistrationByEmail", function (req, res, next) {
  res.render("inscription/index", {
    title: "Inscription par e-mail",
    registration_type: "email"
  });
});


// POST route_To_Save_User_Data, Enregistrer les donnees utilisateur
router.post("/routeToSaveUserData", controller.routeToSaveUserData);

module.exports = router;
