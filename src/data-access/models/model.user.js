import sequelizer from "../../config/sequelize"
const { DataTypes } = require("sequelize");

const UserModel = sequelizer.define(
    "User", //<-- unsa ni?
    {
        id : {type: DataTypes.INTEGER, primaryKey: true},
        email : { type: DataTypes.STRING },
        password : { type: DataTypes.STRING},
        role : { type: DataTypes.STRING },
        status : { type: DataTypes.STRING},
    },
    {
        freezeTableName: true,
        timestamps: false,
        tableName: "users"
    }
)

export default UserModel;