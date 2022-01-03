import jwt from '../../helpers/jwt'
const loginUser = ({ userDb, loginUSER_ENTITY }) => {
    return async function list(data) {

      let entity = await loginUSER_ENTITY({data});
      let token = "";
      let result = {}

      const res = await userDb.loginUser({entity})

      const {email,status} = res

      if (status){
        token = jwt.issue({email: email}, '1d')

        result.email = email;
        result.token = token;
        return {
          message: "Successfully logged in",
          user : result, 
        }
      }
      else{
        throw new Error("Password did not match")
      }

    };
  };

  export default loginUser;