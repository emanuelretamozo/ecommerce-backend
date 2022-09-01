import User from '../models/User.js';

const createClient = async (req, res) => {
    try {
        const newClient = await User.create(req.body);
        return res.json({
            msg: "new client created",
            Client: newClient
        });
    } catch (error) {
        return res.status(500).json({
            msg: "the new client was not registered",
            error
        });
    }
};

export { createClient };

