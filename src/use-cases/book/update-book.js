const updateBook = ({ bookDB, updateBook_ENTITY }) => {
    return async function patch( data ) {

        const {id, serial} = data;

        console.log(id)

        let prevData = await bookDB.getBook({id})


        if (prevData.rowCount != 0) {
            let entity = await updateBook_ENTITY({ prevData, data });
            const res = await bookDB.updateBook({entity});


            if (res) {
                return {
                message: "Book updated succesfully",
                   title : res.title,
                   author : res.author,
                   rating : res.ratings,
                   serial : res.serial,
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