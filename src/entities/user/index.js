//No dependecies on ENTITY
import registerUser_ENTITY from "./register-user";
import loginUSER_ENTITY from "./login-user"

const services = Object.freeze({ registerUser_ENTITY, loginUSER_ENTITY });

export default services;
export { registerUser_ENTITY, loginUSER_ENTITY };