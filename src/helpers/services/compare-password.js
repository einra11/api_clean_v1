const comparePassword = ({ bcryptjs }) => {
    return function encode(data) {
        
        const {password, encryptPassword} = data;

        return bcryptjs.compareSync(password, encryptPassword)
    };
  };

  export default comparePassword;