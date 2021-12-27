import Sequelize from "sequelize";

export default new Sequelize (
    "book_api",
    "postgres",
    "12345",
    {
        host : "localhost",
        dialect : "postgres",
        omitNull : true
    }
)
console.log("Sequelize instance executed");
