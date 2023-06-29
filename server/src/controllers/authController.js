const User = require("../models/user-model");
const jwt = require('jsonwebtoken');
const config = require('../../config/config')

// create json web token
const createToken = (id) => {
    return jwt.sign({ id }, config.secret, {
        expiresIn: config.maxAge
    });
};

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code, 'kek');
    let errors = { login: '', password: '' };

    // duplicate email error
    if (err.username === 11000) {
        errors.username = 'this username is already registered';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.signup_post = async (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    try {
        const user = await User.create({ username, password, firstname, lastname });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: config.maxAge * 1000 });
        res.status(201).json({ user: user._id });
    }
    catch(err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }

}

module.exports.login_post = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.login(username, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: config.maxAge * 1000 });
        res.status(200).json({ user: user._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.logout_post = (req, res) => {
    res.cookie('jwt', 'token', { httpOnly: true, maxAge: 1 });
    res.status(200).json({user: {}})
}