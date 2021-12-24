const bookQuery = ({connects}) => {
    return Object.freeze({
        getAllBooks,
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

    async function createBook({ data }){
        try {
            return response
        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

export default bookQuery;