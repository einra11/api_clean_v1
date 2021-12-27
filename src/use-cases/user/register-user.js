const createUser = ({ userDb, registerUser_ENTITY }) => {
    return async function add( data ) {

         //Steps: Use entity validation -> check dulplication from the validated

        let result = {};

        let resdata = await registerUser_ENTITY({ data });

        const {serial} = resdata;
       

        const isExisting = await userDb.isExisting({serial});


        if (isExisting.rowCount > 0){
            throw new Error("User already exists")
        }
        
        const res = await userDb.createUser({resdata});

        if (res) {
            result.email = res.email;
            result.password = res.password;
            result.role = res.role;
            result.status = res.status;

            return {
                message: "User registered succesfully",
                book: { result }
            }
        }
        else {
            throw new Error("Failed to register user.");
        }  
    }
}

export default createUser;