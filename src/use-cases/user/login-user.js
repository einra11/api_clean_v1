import jwt from '../../helpers/jwt'
const loginUser = ({ userDb, loginUSER_ENTITY }) => {
    return async function list(data) {

      let entity = await loginUSER_ENTITY({data});
      let token = "";

      const res = await userDb.loginUser({entity})

      if (res == null) {
        throw new Error("Network error")
      } else{
        const {id,email,status} = res

        if (status){
          if(status == "inactive"){

            throw new Error("Account is inactive failed to login!")

          } else {

            token = jwt.issue({email: email}, '1d')
  
            return {
              message: "Successfully logged in",
              id: id,
              email:  email,
              token : token
            }
            
          }
        }
        else if(!status){
          throw new Error("Credentials did not match")
        }
        else{
          throw new Error("Network error")
        }
      }
    };
  };

  export default loginUser;