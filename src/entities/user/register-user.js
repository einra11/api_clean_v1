const userCreate = ({ data }) => {
    // return function make({fullname, contact, address} = {}) {
    console.log(data);
    const { email, password, role, status  } = data;

    let userRole = role;
    let userStatus = status;

    if (!email) {
      throw new Error("Please enter username");
    }
    if (!password) {
      throw new Error("Please enter password");
    }
    if (!userRole) {
      userRole = "user"
    }
    if (!userStatus) {
      userStatus = "pending"
    }

    return Object.freeze({
      //item id foreign key
      email:  email,
      password:  password,
      role: userRole,
      status: userStatus
    });
    // }
  };
  
export default userCreate;
  