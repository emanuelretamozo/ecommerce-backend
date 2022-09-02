import express from 'express';
import loginValidator from "../middlewares/loginValidator.js";
import authValidator from "../middlewares/authValidator.js";
import authController from "../controllers/authController.js";


const router = express.Router();

router.post('/login', loginValidator, authValidator, authController.login);

export default router;
