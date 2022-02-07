import { 
    loginUserController,
    registerUserController,
    softDeleteUserController
} from "../../controllers/user/index"

import passport from "passport";

const userRoutes = ({userRouter, makeExpressCallback}) => {
    userRouter.post("/", makeExpressCallback( loginUserController,));
    userRouter.post("/register", makeExpressCallback( registerUserController));
    userRouter.patch("/:id",passport.authenticate('jwt', {session: false}), makeExpressCallback(softDeleteUserController));
    return userRouter;
}

export default userRoutes;