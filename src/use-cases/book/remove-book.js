const removeBook = ({ bookDB }) => {
    return async function select(data) {
      const { id } = data;
  
      // delete query
      const res = await bookDB.removeBook({ id });


      let msg = `Item was not deleted, please try again`;
      if (res == 1) {
        message = `Item deleted successfully.`
        return message;
      }else {
        throw new Error("ID not found");
      }
     
    };
  };
  
export default removeBook;
  