//HTTP Request and formatting starts.
import express from "express";
//import  Swagger


import swaggerRoutes from './route';

export const swaggerRouter = express.Router();
export const swaggerRoute = swaggerRoutes({swaggerRouter});

export const services = Object.freeze({
    swaggerRoute
})
