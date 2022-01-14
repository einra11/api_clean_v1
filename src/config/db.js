// const Pool = require('pg').Pool

// const pool =  new Pool({
//     user: "postgres",
//     password: "12345",
//     host: "localhost",
//     port: "5432",
//     database: "book_api"
// });

// export default pool;


const connect = ({ pg }) => {
    return async function conn() {
      const { Pool } = pg;
  
      let config = null;
        config = {
          user: "postgres",
          host: "db",
          password: "12345",
          database: "book_api",
        };
  
      const pool = new Pool(config);
  
      return pool;
    };
  };
  
export default connect;
  