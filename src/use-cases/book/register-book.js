const createBook = ({ bookDB, registerBook_ENTITY }) => {
    return async function add( data ) {

         //Steps: Use entity validation -> check dulplication from the validated

        let result = {};

        let entity = await registerBook_ENTITY({ data });

        const {serial} = entity;
       

        const distinctBook = await bookDB.distinctBook({serial});


        if (distinctBook.rowCount > 0){
            throw new Error("Duplicated serial has been detected")
        }
        
        const res = await bookDB.createBook({entity});

        if (res) {
            result.title = res.title;
            result.author = res.author;
            result.rating = res.ratings;
            result.serial = res.serial;

            return {
                message: "Book registered succesfully",
                book: { result }
            }
        }
        else {
            throw new Error("Failed to register book.");
        }  
    }
}

export default createBook;