const userQuery = ({connects, model}) => {
    return Object.freeze({
        loginUser,
        createUser,
        isExisting,
        softDelete,
        getUserId
      });

    async function loginUser({ entity }){
       try {
          const conn = await connects();
          const result = await new Promise((resolve) => {
            let sql = `SELECT email, password FROM users WHERE "email" = $1`;
            let params = [entity.email];
            conn.query(sql, params, (err, res) => {
                conn.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          return result;
        } catch (e) {
          console.log("Error: ", e);
        }
    }

    async function createUser({ entity }){
        try {
            const {email, password, role, status} = entity;
            const User = model.UserModel;
            const response = await User.create({
                email: email,
                password: password,
                role: role,
                status: status,
            });
            return response.dataValues;
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async function softDelete ({data}){
     
        const {id} = data;
            try {
                // console.log(bookId.rows[0].id);
                const User = model.UserModel;
                const response = await User.update({
                    status : "inactive",
                },
                {
                    where: {id: id},
                }
              );
              return response;
    
            } catch (error) {
                console.log("Error: ", error);
            }

       
    }
    async function getUserId({ resdata }) {
        try {
          const conn = await connects();
          const result = await new Promise((resolve) => {
            let sql = `SELECT id FROM users WHERE "id" = $1`;
            let params = [resdata.id];
            conn.query(sql, params, (err, res) => {
                conn.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          return result;
        } catch (e) {
          console.log("Error: ", e);
        }
      }

    async function isExisting ({ email }){
        try {
            const conn = await connects()

            const response = await new Promise((resolve) =>{
                let sql = `SELECT * FROM users WHERE email =$1`;
                let params = [email];
                conn.query(sql, params, (err, res) => {
                    conn.end();
                    if (err) resolve(err)
                    resolve(res)
                });
            })
            return response
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

export default userQuery;