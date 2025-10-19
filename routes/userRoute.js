import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'
import wrapAsync from '../utils/wrapAsync.js';

const userRouter = express.Router();

userRouter.post("/register", wrapAsync(registerUser));
userRouter.post("/login", wrapAsync(loginUser));

export default userRouter;