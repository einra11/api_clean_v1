//Dependecies can be data-access and entity
import userDb from '../../data-access/users/index'
import { registerUser_ENTITY, loginUSER_ENTITY } from '../../entities/user/index';


//Local functions
import loginUser from './login-user';
import createUser from './register-user';
import softDeleteUser from './soft-delete-user';

//Initialize Use Cases Section
const loginUserUseCase = loginUser({bookDB, loginUSER_ENTITY});
const createUserUseCase = createUser({bookDB, registerUser_ENTITY});
const softDeleteUserUseCase = softDeleteUser({bookDB, updateBook_ENTITY});
// console.log(updateBook)


//Export interface 'services'
const services = Object.freeze({
    loginUserUseCase,
    createUserUseCase,
    softDeleteUserUseCase
});

export default services;
export {
    loginUserUseCase,
    createUserUseCase,
    softDeleteUserUseCase
 };


