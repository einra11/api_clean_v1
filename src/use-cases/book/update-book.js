const updateBook = ({ bookDB, updateBook_ENTITY }) => {
    return async function patch( data ) {
        
        let entity = await updateBook_ENTITY({ data });
        let result = {};

        const res = await bookDB.updateBook({entity});

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
    };
};

export default updateBook;