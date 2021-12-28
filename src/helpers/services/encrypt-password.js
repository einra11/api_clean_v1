const encryptPassword = ({ bcrypt }) => {
    return function encode(data) {
        const { password } = data;
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt)
    };
  };

  export default encryptPassword;