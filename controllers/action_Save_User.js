// call data base configuration 
const db_connect = require("../models/db_config.js");


// function Save User Data
exports.routeToSaveUserData = (req, res) => {

    try {

        console.log("Connexion a la base de donnees ");

    } catch (error) {

        console.log("Erreur de connexion ...!:", error);

    }

} 