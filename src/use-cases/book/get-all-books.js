const getAllBooks = ({ bookDB }) => {
    return async function list() {
      let bookList = [];
      const result = await bookDB.getAllBooks({});
  
      // console.log(result)

      for (let data of result.rows) {
        const dataValue = {};
        
        dataValue.id = data.id;
        dataValue.title = data.title;
        dataValue.author = data.author;
        dataValue.ratings = data.ratings;
        dataValue.serial = data.serial;

        bookList.push(dataValue)
       
      }

      console.log('\x1b[32m%s\x1b[0m', "USE-CASE-TRIGGERED")
  
      return bookList;
    };
  };

  export default getAllBooks;