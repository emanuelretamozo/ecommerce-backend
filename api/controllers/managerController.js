import User from '../models/User.js';

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