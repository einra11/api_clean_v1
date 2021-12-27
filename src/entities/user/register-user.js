const userCreate = ({ data }) => {
    // return function make({fullname, contact, address} = {}) {
    console.log(data);
    const { email, password } = data;
    if (!email) {
      throw new Error("Please enter username");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
  
    return Object.freeze({
      //item id foreign key
      email:  email,
      password:  password,
    });
    // }
  };
  
export default userCreate;
  