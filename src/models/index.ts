import { Sequelize } from 'sequelize';
import options from '../config/sequelizeConfig';
import { AccountFactory } from './Account';

export const createModels = () => {
    const sequelize = new Sequelize(options);

    const db = {
        sequelize,
        Sequelize,
        Account: AccountFactory(sequelize)
    };

    return db;
};
