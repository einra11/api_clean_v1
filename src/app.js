import express from 'express';
import cors from 'cors';




//import tokenizers
import { configureJWTStrat } from './helpers/passport/passport-jwt'
import passport from 'passport'

export const app = express();

//Route imports section
import {bookRoute} from './routes/book/index'
import {userRoute} from './routes/user/index'
import {swaggerRoute} from './routes/swaggerDocumentation/index'
//--------------------------

const port = 4032;

//Initialize App
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
configureJWTStrat();


export let server = app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

//Initialize routes
app.use("/api/books", bookRoute);
app.use("/api/users", userRoute);
app.use("/api", swaggerRoute)

//--------------------------

app.use(async (req, res) => {
    res.status(404).send("Sorry route unavailable.");
});

export default {app};

