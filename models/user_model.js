// call data base configuration fron db_config
const db_connect = require("../config/db_config.js");


// Create user class for this user_model

const user = {

    // Get Data login from user_controller
    saveUserLogin: (dataLogin, callback) => {

        const { email, hashPassword, date_inscription } = dataLogin;

        const query = 'insert into user (email, pwd, date_inscription)  values(?, ?, ?)';

        // @ INSERT DATA LOGIN TO USER TABLE
        db_connect.query(query, [email, hashPassword, date_inscription], (error, results) => {

            if (error) {
                console.error('Error saving login user:', error);
                return callback(error);
            }
            return callback(results);

        });
    }
};
module.exports = user;