import { 
    getAllBooksController,
    // createBookController,
    // removeBookController, 
    // updateBookController, 
} from "../../controllers/book/index"

const bookRoutes = ({bookRouter, makeExpressCallback}) => {
    bookRouter.get("/", makeExpressCallback( getAllBooksController,));
    // bookRouter.post("/", makeExpressCallback( createBookController,));
    // bookRouter.patch("/:id", makeExpressCallback( removeBookController, ));
    // bookRouter.delete("/:id", makeExpressCallback(updateBookController));
    return bookRouter;
}

export default bookRoutes;