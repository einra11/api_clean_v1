import { 
    loginUserController,
    registerUserController,
    softDeleteUserController
} from "../../controllers/user/index"

const userRoutes = ({userRouter, makeExpressCallback}) => {
    userRouter.get("/", makeExpressCallback( loginUserController,));
    userRouter.post("/", makeExpressCallback( registerUserController));
    userRouter.patch("/:id", makeExpressCallback(softDeleteUserController));
    return userRouter;
}

export default userRoutes;