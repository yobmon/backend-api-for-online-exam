const jwt = require('jsonwebtoken')

const Webtoken = (Userid, res) => {
    try {
        //if (!process.env.JWT_KEY) {
         //   throw new Error('JWT_KEY is not defined in the environment variables.');
      //  }

        const token = jwt.sign({ Userid }, process.env.JWT_KEY, { expiresIn: '1h' });
        res.cookie('cookie', token, {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict'
        });
        return token;
    } catch (error) {
        console.error('Error in token creation:', error);
        throw error;
    }
};

module.exports = Webtoken;