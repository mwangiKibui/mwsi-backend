const {comparePassword} = require('../helpers/passwordHelper');
const {generateToken} = require('../middlewares/auth');
const db = require('../db/models');

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    
    if (!user) {
        return res.status(400).json({ success:false, message: 'Invalid email or password' });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ success:false, message: 'Invalid email or password' });
    }
    
    const token = generateToken(
        { id: user.id, 
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }
    );

    return res.json({ 
        success:true,
        message: 'Login successful',
        data : token 
    });
}
