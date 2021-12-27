const removeBook = ({ bookDB }) => {
    return async function select(data) {
      const { id } = data;
  
      // delete query
      const res = await bookDB.removeBook({ id });
      let msg = `Item was not deleted, please try again`;
      if (res == 1) msg = `Item deleted successfully.`;
      return msg;
    };
  };
  
export default removeBook;
  