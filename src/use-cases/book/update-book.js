const updateBook = ({ bookDB, updateBook_ENTITY }) => {
    return async function patch( data ) {

        const {id, serial} = data;

        console.log(id)

        let prevData = await bookDB.getBook({id})


        if (prevData.rowCount != 0) {
            let entity = await updateBook_ENTITY({ prevData, data });
            const res = await bookDB.updateBook({entity});

            let result = {};


            if (res) {
                result.title = res.title;
                result.author = res.author;
                result.rating = res.ratings;
                result.serial = res.serial;
    
                return {
                    message: "Book updated succesfully",
                    book: { result }
                }
            }
            else {
                throw new Error("Failed to update book");
            }

        } else{
            throw new Error ("Could not found id")
        }
    };
};

export default updateBook;