import { 
    getAllBooksController,
    createBookController,
    removeBookController, 
    updateBookController, 
} from "../../controllers/book/index"

import passport from "passport";

const bookRoutes = ({bookRouter, makeExpressCallback}) => {
    // bookRouter.get("/",passport.authenticate('jwt', {session: false}), makeExpressCallback( getAllBooksController));
    bookRouter.get("/",makeExpressCallback( getAllBooksController));
    bookRouter.post("/", makeExpressCallback( createBookController));
    bookRouter.patch("/:id", makeExpressCallback(updateBookController));
    bookRouter.delete("/:id", makeExpressCallback(removeBookController));
    return bookRouter;
}

export default bookRoutes;