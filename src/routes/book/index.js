//HTTP Request and formatting starts.
import express from 'express';
//Import HTTP formatter callback
import makeExpressCallback from '../../controllers/express-callback/index';

import bookRoutes from './route';


export const bookRouter = express.Router();

export const bookRoute = bookRoutes({bookRouter, makeExpressCallback});

export const services = Object.freeze({
    bookRoute
})