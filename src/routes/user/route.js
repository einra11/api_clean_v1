import { 
    loginUserController,
    registerUserController,
    softDeleteUserController
} from "../../controllers/user/index"

const userRoutes = ({bookRouter, makeExpressCallback}) => {
    bookRouter.get("/", makeExpressCallback( loginUserController,));
    bookRouter.post("/", makeExpressCallback( registerUserController,));
    bookRouter.patch("/:id", makeExpressCallback(softDeleteUserController));
    return bookRouter;
}

export default userRoutes;