import { Sequelize } from 'sequelize';
import options from '../config/sequelizeConfig';
import { AccountFactory, AccountModel } from './Account';

export const createModels = (): {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
    Account: typeof AccountModel;
} => {
    const sequelize = new Sequelize(options);

    const db = {
        sequelize,
        Sequelize,
        Account: AccountFactory(sequelize),
    };

    return db;
};
