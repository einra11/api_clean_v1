import { 
    getAllBooksController,
    createBookController,
    removeBookController, 
    updateBookController, 
} from "../../controllers/book/index"

const bookRoutes = ({bookRouter, makeExpressCallback}) => {
    bookRouter.get("/", makeExpressCallback( getAllBooksController,));
    bookRouter.post("/", makeExpressCallback( createBookController,));
    bookRouter.patch("/:id", makeExpressCallback(updateBookController));
    bookRouter.delete("/:id", makeExpressCallback(removeBookController));
    return bookRouter;
}

export default bookRoutes;