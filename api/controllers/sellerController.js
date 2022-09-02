import User from '../models/User.js';

const createSeller = async (req, res) => {
    try {
        const newSeller = await User.create(req.body);
        return res.json({
            msg: "new seller created",
            Seller: newSeller
        });
    } catch (error) {
        return res.status(500).json({
            msg: "the new seller was not registered",
            error
        });
    }
};

export { createSeller };
