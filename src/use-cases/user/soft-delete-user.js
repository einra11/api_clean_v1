const softDeleteUser = ({ userDb}) => {
    return async function patch( data ) {

       

        const res = await userDb.softDelete({data});

        if (res) {
            return {
                message: "Account soft deleted",
            }
        }
        else {
            throw new Error("Something went wrong");
        }  
    };
};

export default softDeleteUser;