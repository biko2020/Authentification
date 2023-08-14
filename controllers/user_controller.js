const userModel = require('../models/user_model');
const bcrypt = require("bcryptjs");

// Function Save User Login Data
exports.saveUserLogin = async (req, res) => {
    try {

        const { email, password, retappassword, date_inscription, role } = req.body;

        // Test if fields are empty

        if (!email || !password || !retappassword) {
            return res.render("inscription/index", {
                registration_type: "email",
                msg: "Veuillez remplire les champs vide  ...!",
                _valeurMsg: "error",
            });

            // Test if passwords do not match
        } else if (password !== retappassword) {
            return res.render("inscription/index", {
                registration_type: "email",
                msg: "Mots de passe ne correspondent pas ...!",
                _valeurMsg: "error",

            })
        }

        // @ Encrypter le mot de passe sur 8 bits
        let hashPassword = await bcrypt.hash(password, 8);

        // Call the appropriate method from UserModel for saveUserLogin
        userModel.saveUserLogin({ email, hashPassword, date_inscription, role }, (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'error' });
            }
            return res.status(200).json({ message: 'successfully' });
        });

    } catch (error) {
        console.log("Error during login:", error);
        return res.status(500).json({ error: 'error' });
    }
}
