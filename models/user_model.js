// call data base configuration 
const db_connect = require("../config/db_config.js");


// Create a class user 

const user = {

    // @ INSERT DATA LOGIN TO USER TABLE

    user_Login: (dataLogin, callback) => {
        const { email, password } = dataLogin;

        const query = 'insert into user (email, pwd)  values(?, ?, ?)';

        db_connect.query(query, [email, password], (error, results) => {
            if (error) {
                console.error('Error saving login user:', error);
                return callback(error);
            }
            return callback(results);
        });
    }
};
module.exports = user;