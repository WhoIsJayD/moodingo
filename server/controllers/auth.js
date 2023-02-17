import User from '../models/user';
import {hashPassword} from '../helpers/auth';

export const register = async (req, res) => {
    const {name, email, password} = req.body;
    // console.log(name, email, password);
    if (!name || !email || !password) {
        return res.status(400).send('Please provide all fields');
    }
    if (password.length < 6 || password.length > 64) {
        return res.status(400).send('Password must be between 6 and 64 characters');
    }
    const userExists = await User.findOne({email: email});
    if (userExists) {
        return res.status(400).send('Email already exists');
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
        username: name, email: email, password: hashedPassword
    });
    try {
        await newUser.save()
        console.log("Created new user");

        return res.status(201).send({
            ok: true, message: 'New User created',
        });
    } catch (err) {
        console.log(err.response);

        return res.status(500).send("Username already taken...");
    }
}