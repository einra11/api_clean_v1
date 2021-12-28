import bcrypt from 'bcrypt';

import encryptPassword from './encrypt-password';
import comparePassword from './compare-password';

const encryptPasswordService = encryptPassword({bcrypt});
const comparePasswordService = comparePassword({bcrypt});


const services = new Object.freeze ({
    encryptPasswordService,
    comparePasswordService
})

export default services;
export {
    encryptPasswordService,
    comparePasswordService
}