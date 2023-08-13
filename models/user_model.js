// call data base configuration 
const db_connect = require("../config/db_config.js");


// Create a class user 

const user = {

    // @ INSERT DATA LOGIN TO USER TABLE

    saveUserLogin: (dataLogin, callback) => {
        
        const { email, password, date_inscription } = dataLogin;

  
        const query = 'insert into user (email, pwd, date_inscription)  values(?, ?, ?)';

        db_connect.query(query, [email, password, date_inscription], (error, results) => {
            if (error) {
                console.error('Error saving login user:', error);
                return callback(error);
            }
            return callback(results);
        });
    }
};
module.exports = user;