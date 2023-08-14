// call data base configuration fron db_config
const db_connect = require("../config/db_config.js");


// Create user class for this user_model

const user = {

    // Get Data login from user_controller
    saveUserLogin: (dataLogin, callback) => {

        const { email, hashPassword, date_inscription, role } = dataLogin;

        // @ INSERT DATA LOGIN TO user TABLE
        const insert_UserLogin = 'insert into user (email, pwd, date_inscription)  values(?, ?, ?)';

        db_connect.query(insert_UserLogin, [email, hashPassword, date_inscription], (error, results) => {

            if (error) {
                console.error('Error saving login user:', error);
                return callback(error);
            }

            // @ SELECT role_id FORM role 
            const select_role_id = 'select role_id from role where role_name = ?';

            db_connect.query(select_role_id, [role], (error_role_id, results_role_id) => {
                if (error_role_id) {
                    console.error('Error retrieving role_id:', error_role_id);
                    return callback(error_role_id);
                }
                // test if results_role_id is empty
                if (results_role_id.length === 0) {
                    console.error('role not found:', role);
                    return callback('Role note found');
                }

                // Get results_role_id content
                const role_Id = results_role_id[0].role_id;

                // @ INSERT user_id and role_id INTO user_role
                const user_Id = results.insertId;
                const insert_User_Role = 'insert into user_role (user_id, role_id) values(?, ?) ';

                db_connect.query(insert_User_Role, [user_Id, role_Id], (error_User_role, results_user_role) => {
                    if (error_User_role) {
                        console.error('Error to affect role to user:', error_User_role);
                        return callback(error_User_role);
                    }
                });

                return callback(results);

            });


        });

    }

};

module.exports = user;