const updateBook = ({data}) => {
    const {title,author, id} = data;


    let rating = data.ratings;
    let serial_holder = data.serial;

    if(!title) {
        throw new Error("Book must have a title");
    }
    if(!author) {
        throw new Error("Book must have a author");
    }
    if (!rating){
        rating = 0;
    }
    if (rating > 5){
        throw new Error("Inputed rating must not exceed 5");
    }
    if (!serial_holder){
        //Generate new unique serial
        const d = new Date();
        serial_holder = d.getMilliseconds() + "PFERD_IN_DER_WAND"
    }
    if(!id){
        throw new Error("Request error ID not found");
    }

    return Object.freeze({
        title : title,
        author : author,
        rating : rating,
        serial : serial_holder,
        id : id
    })

};

export default updateBook;