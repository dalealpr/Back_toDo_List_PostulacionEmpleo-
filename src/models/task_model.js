import { DataTypes } from 'sequelize';

const TaskModel = (sequelize) => {
    return sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pendiente'
        }
    }, {
        tableName: 'tasks',
        timestamps: true,
        createdAt: 'fechaCreacion',
        updatedAt: 'fechaActualizacion'
    });
};

export default TaskModel;