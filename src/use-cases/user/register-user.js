const createUser = ({ userDb, registerUser_ENTITY }) => {
    return async function add( data ) {

         //Steps: Use entity validation -> check dulplication from the validated


        let entity = await registerUser_ENTITY({ data });
       
        const {email} = data;

        console.log(email)

        const isExisting = await userDb.isExisting({email});


        if (isExisting.rowCount > 0){
            throw new Error("User already exists")
        }

        console.log(entity)
        
        const res = await userDb.createUser({entity});

        if (res) {
        

            return {
                message: "User registered succesfully",
                email : res.email,
                password : res.password,
                role : res.role,
                status : res.status,
            }
        }
        else {
            throw new Error("Failed to register user.");
        }  
    }
}

export default createUser;