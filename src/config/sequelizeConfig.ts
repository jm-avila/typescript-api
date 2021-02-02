import { Options } from 'sequelize';

const { POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST } = process.env;

const options: Options = {
    database: POSTGRES_DB,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    host: POSTGRES_HOST,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 0,
        idle: 10000,
    },
    query: {
        raw: true,
    },
    logging: console.log,
};

export default options;
