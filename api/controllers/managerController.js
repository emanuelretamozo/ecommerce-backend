import User from '../models/User.js';
import mongoose from 'mongoose';
import seeder from 'mongoose-seeder';

const db = mongoose.connection;

const createManager = async (req, res) => {
    try {
        const newManager = await User.create(req.body);
        return res.json({
            msg: "new manager created",
            Manager: newManager
        });
    } catch (error) {
        return res.status(500).json({
            msg: "the new manager was not registered",
            error
        });
    }
};

export { createManager };
