import { Sequelize } from 'sequelize';

export const initSQLite = async () => {
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.SQLITE_DB_PATH || '../../../database.sqlite',
    });

    return sequelize;
}