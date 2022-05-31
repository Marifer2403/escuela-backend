import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Users extends Model { }

Users.init({
    // Id generado automaticamente
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, modelName: "users",
});

export default Users;