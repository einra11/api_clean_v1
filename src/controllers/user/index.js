//Controller's dependent are use-cases
import { 
    loginUserUseCase,
    registerUserUseCase,
    softDeleteUserCase,
    } from "../../use-cases/user/index"
    
    //Local Functions
    import getAllBooks from './get-all-books';
    import createBook from './register-book';
    import updateBook from './update-book';
    
    
    //Initialize Controllers Section
    const loginUserController = getAllBooks({loginUserUseCase});
    const registerUserController= createBook({registerUserUseCase});
    const softDeleteUserController = updateBook({softDeleteUserCase});
    
    
    
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