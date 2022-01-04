const createBook = ({ bookDB, registerBook_ENTITY }) => {
    return async function add( data ) {

         //Steps: Use entity validation -> check dulplication from the validated


        let entity = await registerBook_ENTITY({ data });

        const {serial} = entity;
       

        const distinctBook = await bookDB.distinctBook({serial});


        if (distinctBook.rowCount > 0){
            throw new Error("Duplicated serial has been detected")
        }
        
        const res = await bookDB.createBook({entity});

        if (res) {
        
            return {
                message: "Book registered succesfully",
                title : res.title,
                author : res.author,
                rating : res.ratings,
                serial : res.serial,
            }
        }
        else {
            throw new Error("Failed to register book.");
        }  
    }
}

export default createBook;