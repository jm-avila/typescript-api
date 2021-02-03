import DataTypes, { Sequelize } from 'sequelize';
import { AccountFactory, AccountModel } from './Account';
import { ProfileFactory, ProfileModel } from './Profile';

export const createModels = (
    sequelize: Sequelize,
): {
    sequelize: Sequelize;
    Account: typeof AccountModel;
    Profile: typeof ProfileModel;
} => {
    const db = {
        sequelize,
        Account: AccountFactory(sequelize, DataTypes),
        Profile: ProfileFactory(sequelize, DataTypes),
    };

    Object.values(db).forEach((model) => {
        if ('associate' in model) {
            model.associate(db);
        }
    });

    return db;
};
