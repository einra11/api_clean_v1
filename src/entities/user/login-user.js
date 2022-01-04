const userLogin = ({ data }) => {
    // return function make({fullname, contact, address} = {}) {
    console.log(data);
    const { email, password } = data;
    if (!email) {
      throw new Error("Please enter email");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
  
    return Object.freeze({
      email: email,
      password: password,
    });
    // }
  };
  
export default userLogin;
  