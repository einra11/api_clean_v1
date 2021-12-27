//HTTP Request and formatting starts.
import express from "express";
//Import HTTP formatter callback
import makeExpressCallback from '../../controllers/express-callback/index';

import userRoutes from './route';


export const userRouter = express.Router();
export const userRoute = userRoutes({userRouter, makeExpressCallback});

export const services = Object.freeze({
    userRoute
})
