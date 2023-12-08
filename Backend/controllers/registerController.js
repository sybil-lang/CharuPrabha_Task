const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: user }).exec();
    if (duplicate) {
        console.log('Duplicate username')
        return res.sendStatus(409);
    } // Conflict
    try {
        console.log("inside try")
        //encrypt the password
        const hashedPwd = await bcrypt.hash(pwd, 10);
        console.log('2',hashedPwd,'-----------',user)
        //create and store the new user
        const result = await User.create({
            "username": user,
            "password": hashedPwd
        });

        console.log('3',result);

        res.status(201).json({ 'success': `New user ${user} created!` });
    } catch (err) {
        console.log("coming here")
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = { handleNewUser };