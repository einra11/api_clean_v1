const updateBook = ({prevData, data}) => {
    let {title,author, id} = data;


    let rating = data.ratings;
    let serial_holder = data.serial;

    if(!title) {
       title = prevData.title;
    }
    if(!author) {
        author = prevData.author;
    }
    if (!rating){
        rating = prevData.ratings;
    }
    if (rating > 5){
        throw new Error("Inputed rating must not exceed 5");
    }
    if (!serial_holder){
        serial_holder =  prevData.serial
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