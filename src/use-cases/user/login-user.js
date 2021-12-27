const loginUser = ({ userDb, loginUSER_ENTITY }) => {
    return async function list() {

      let resdata = await loginUSER_ENTITY({ data });

      let userData = [];
      const result = await userDb.loginUser({resdata});
  
      // console.log(result)

      for (let data of result.rows) {
        const dataValue = {};
        
        dataValue.id = data.id;
        dataValue.email = data.email;
        dataValue.password = data.password;
        dataValue.role = data.role;
        dataValue.status = data.status;

        userData.push(dataValue)
       
      }

      console.log('\x1b[32m%s\x1b[0m', "USE-CASE-TRIGGERED")
  
      return userData;
    };
  };

  export default loginUser;