const encryptPassword = ({ bcryptjs }) => {
    return function encode(data) {
        const { password } = data;
        const salt = bcryptjs.genSaltSync(10);
        return bcryptjs.hashSync(password, salt)
    };
  };

  export default encryptPassword;