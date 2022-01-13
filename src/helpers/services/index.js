import bcryptjs from 'bcryptjs';

import encryptPassword from './encrypt-password';
import comparePassword from './compare-password';

const encryptPasswordService = encryptPassword({bcryptjs});
const comparePasswordService = comparePassword({bcryptjs});


const services = Object.freeze ({
    encryptPasswordService,
    comparePasswordService
})

export default services;
export {
    encryptPasswordService,
    comparePasswordService
}