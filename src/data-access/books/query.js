const bookQuery = ({connects, model}) => {
    return Object.freeze({
        getAllBooks,
        distinctBook,
        createBook,
        getBookId,
        updateBook,
        removeBook
      });

    async function getAllBooks({}){
        try {
            const conn = await connects()

            const response = await new Promise((resolve) =>{
                let sql = `SELECT * FROM books ORDER BY "id"`;
                conn.query(sql, (err, res) => {
                    conn.end();
                    if (err) resolve(err)
                    resolve(res)
                });
            })
            console.log('\x1b[32m%s\x1b[0m', 'DATA_ACCESS TRIGGERED') 
            return response
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async function createBook({ resdata }){
        try {
            const {title, author, rating, serial} = resdata;
            //Later will add relation for the books and users
            const Book = model.BookModel;
            const response = await Book.create({
                title: title,
                author: author,
                ratings: rating,
                serial: serial
            });
            return response.dataValues;
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    async function updateBook ({resdata}){
        
        //get first the id of the book via check its serial
        const {title, author, rating, serial} = resdata;
        const bookId = await getBookId({resdata})

        if (bookId){
            try {
                // console.log(bookId.rows[0].id);
                const Book = model.BookModel;
                const response = await Book.update({
                   title: title,
                   author: author,
                   ratings: rating,
                   serial: serial
                },
                {
                    where: {id: bookId.rows[0].id},
                }
              );
              return response;
    
            } catch (error) {
                console.log("Error: ", error);
            }
        }

       
    }

    async function removeBook({ id }) {
        try {
          const Book = model.BookModel;
          const res = await Book.destroy({
            where: {
              id: id,
            },
          });
          return res;
        } catch (e) {
          console.log("Error: ", e);
        }
      }

    async function getBookId({ resdata }) {
        try {
          const conn = await connects();
          const result = await new Promise((resolve) => {
            let sql = `SELECT id FROM books WHERE "id" = $1`;
            let params = [resdata.id];
            conn.query(sql, params, (err, res) => {
                conn.end();
              if (err) resolve(err);
              resolve(res);
            });
          });
          return result;
        } catch (e) {
          console.log("Error: ", e);
        }
      }

    async function distinctBook ({ serial }){
        try {
            const conn = await connects()

            const response = await new Promise((resolve) =>{
                let sql = `SELECT * FROM books WHERE serial =$1`;
                let params = [serial];
                conn.query(sql, params, (err, res) => {
                    conn.end();
                    if (err) resolve(err)
                    resolve(res)
                });
            })
            return response
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

export default bookQuery;