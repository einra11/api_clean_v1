import express from 'express';
import cors from 'cors';

export const app = express();

//Route imports section
import {bookRoute, bookRouter} from './routes/book/index'
import {userRoute, userRouter} from './routes/user/index'
//--------------------------

const port = 4032;

//Initialize App
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


export var server = app.listen(port, () => {
    console.log(`Server is running at PORT http://localhost:${port}`);
});

//Initialize routes
app.use("/api/books", bookRoute);
app.use("/api/users", userRoute);

//--------------------------

app.use(async (req, res) => {
    res.status(404).send("Route unavailable.");
});

