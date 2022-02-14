import Sequelize from "sequelize";

export default new Sequelize (
    "book_api",
    "postgres",
    "12345",
    {
        host : "172.16.4.182",
        dialect : "postgres",
        omitNull : true,
        port : 5431
    }
)