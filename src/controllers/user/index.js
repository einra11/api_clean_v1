//Controller's dependent are use-cases
import { 
    loginUserUseCase,
    createUserUseCase,
    softDeleteUserUseCase,
    } from "../../use-cases/user/index"
    
    //Local Functions
    import login from './login';
    import register from './register';
    import softDelete from './soft-delete';
    
    
    //Initialize Controllers Section
    const loginUserController = login({loginUserUseCase});
    const registerUserController= register({createUserUseCase});
    const softDeleteUserController = softDelete({softDeleteUserUseCase});
    
    
    
    const services = Object.freeze({
        loginUserController,
        registerUserController,
        softDeleteUserController, 
    });
    
    
    //Export interface 'services' and controllers
    export default services;
    export { 
        loginUserController,
        registerUserController,
        softDeleteUserController, 
     };