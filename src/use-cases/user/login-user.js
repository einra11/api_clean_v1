import jwt from '../../helpers/jwt'
const loginUser = ({ userDb, loginUSER_ENTITY }) => {
    return async function list(data) {
      const {email, password} = data;

      let entity = await loginUSER_ENTITY({data});
      let token = "";
      let result = {}

      const res = await userDb.loginUser({entity})

      if (res.rows.length == 1){
        let row = res.rows[0];
        let email = row.email;
        token = jwt.issue({email: email}, '1d')

        result.email = email;
        result.token = token;

        return {
          message: "Successfully logged in",
          user : result, 
        }
      }

    };
  };

  export default loginUser;