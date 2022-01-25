import { 
    loginUserController,
    registerUserController,
    softDeleteUserController
} from "../../controllers/user/index"

const userRoutes = ({userRouter, makeExpressCallback}) => {
    userRouter.post("/", makeExpressCallback( loginUserController,));
    userRouter.post("/register", makeExpressCallback( registerUserController));
    userRouter.patch("/:id", makeExpressCallback(softDeleteUserController));
    return userRouter;
}

export default userRoutes;