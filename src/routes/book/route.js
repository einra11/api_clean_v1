import { 
    getAllBooksController,
    createBookController,
    removeBookController, 
    updateBookController, 
} from "../../controllers/book/index"

import passport from "passport";

const bookRoutes = ({bookRouter, makeExpressCallback}) => {
    bookRouter.get("/",passport.authenticate('jwt', {session: false}), makeExpressCallback( getAllBooksController));
    // bookRouter.get("/",makeExpressCallback( getAllBooksController));
    bookRouter.post("/",passport.authenticate('jwt', {session: false}), makeExpressCallback( createBookController));
    bookRouter.patch("/:id",passport.authenticate('jwt', {session: false}), makeExpressCallback(updateBookController));
    bookRouter.delete("/:id",passport.authenticate('jwt', {session: false}), makeExpressCallback(removeBookController));
    return bookRouter;
}

export default bookRoutes;