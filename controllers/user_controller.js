const userModel = require('../models/user_model');

// function Save User Login Data
exports.user_Login = (req, res) => {
    try {
        const { email, password } = req.body;

        // Call the appropriate method from UserModel for user login
        UserModel.user_Login({ email, password }, (error, result) => {
            if (error) {
                return res.status(500).json({ error: 'An error occurred' });
            }
            return res.status(200).json({ message: 'User logged in successfully' }); // Status code 200 for successful login
        });

    } catch (error) {
        console.log("Error during login:", error);
        return res.status(500).json({ error: 'An error occurred' }); // Return a response even if the error is caught
    }
}
