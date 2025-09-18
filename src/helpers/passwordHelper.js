const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash;
}

exports.comparePassword = async (plainPassword, hash) => {
    return await bcrypt.compare(plainPassword, hash);
}