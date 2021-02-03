import { Sequelize, Model, DataTypes } from 'sequelize';
import { AccountModel } from './Account';

export class ProfileModel extends Model {
    public readonly id!: string;

    public name!: string;

    public lastName!: string;

    public birthdate!: Date | string;

    public readonly createdAt!: Date | string;

    public readonly updatedAt!: Date | string;

    public static associate(models: { Account: typeof AccountModel }): void {
        ProfileModel.belongsTo(models.Account, { foreignKey: 'id' });
    }
}

export const ProfileFactory = (sequelize: Sequelize, dataTypes: typeof DataTypes): typeof ProfileModel => {
    ProfileModel.init(
        {
            name: {
                type: dataTypes.STRING(100),
                allowNull: false,
            },
            lastName: {
                type: dataTypes.STRING(100),
                allowNull: false,
            },
            birthdate: {
                type: dataTypes.DATE(),
                allowNull: false,
            },
        },
        {
            sequelize,
            underscored: true,
            timestamps: true,
            freezeTableName: true,
            modelName: 'profile',
        },
    );

    return ProfileModel;
};
