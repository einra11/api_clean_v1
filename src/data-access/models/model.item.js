import sequelizer from "../../config/sequelize"
const { DataTypes } = require("sequelize");

const BookModel = sequelizer.define(
    "Book", //<-- unsa ni?
    {
        id : {type: DataTypes.INTEGER, primaryKey: true},
        title : { type: DataTypes.STRING },
        author : { type: DataTypes.STRING},
        ratings : { type: DataTypes.INTEGER},
        serial : { type: DataTypes.STRING},
    },
    {
        freezeTableName: true,
        timestamps: false,
        tableName: "books"
    }
)

export default BookModel;