import Sequelize from "sequelize";

export default new Sequelize (
    "book_api",
    "postgres",
    "12345",
    {
        host : "db",
        dialect : "postgres",
        omitNull : true,
        port : 5431
    }
)