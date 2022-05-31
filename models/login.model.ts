import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Estudiantes extends Model { }

Estudiantes.init({
    // Id generado automaticamente
    num_control: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    semestre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize, modelName: "estudiantes",
});

export default Estudiantes;