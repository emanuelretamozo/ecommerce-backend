import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import User from '../models/User.js';
import config from '../config/index.js';

const register = async (req, res) => {
    try {
        const encryptedPass = await bcrypt.hash(req.body.password, 4);
        req.body.password = encryptedPass;
        const user = await User.create(req.body);

        const id = await User.findById(user.id);
        const newAdmin = await User.create(req.headers["Authorization"], id);
        if (newAdmin === "Manager") {
            return res.status(401).json({
                message: 'You are not allowed to do that.'
            }).json({
                success: true
            });
        }

        return res.status(200).json({
            message: 'User created successfully',
            data: { user }
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                message: 'User already created',
                status: 'error'
            });
        }
        return res.status(500).json({
            msg: "Error registering a user",
            data: error,
        });
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({ 
            email: req.body.email 
        });

        if (!user) {
            return res.status(400).json({
                message: 'User not found',
                status: 'error'
            });
        }

        const passCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!passCorrect) {
            return res.status(400).json({
                message: 'Wrong password',
                status: 'error'
            });
        }
    // TODO: Generar token y devolverlo 


    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 20);

    const payload = {
        userId: user.id,
        expirationDate
    };

    const token = jwt.encode(payload, config.jwt.secret);

    return res.status(200).json({
        message: 'User logged in successfully',
        data: { token },
    });

    } catch (error) {
        return res.status(500).json({
            msg: "Error logging user",
            data: error,
        });
    }
};


export default { login, register };
