import { Sequelize, Model, DataTypes } from 'sequelize';

export class AccountModel extends Model {
    public readonly id!: string;

    public email!: string;

    public password!: string;

    public readonly createdAt!: Date | string;

    public readonly updatedAt!: Date | string;
}

export const AccountFactory = (sequelize: Sequelize, dataTypes: typeof DataTypes): typeof AccountModel => {
    AccountModel.init(
        {
            id: {
                type: dataTypes.UUID,
                primaryKey: true,
                defaultValue: dataTypes.UUIDV4,
            },
            email: {
                type: dataTypes.STRING(100),
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: dataTypes.STRING(250),
                allowNull: false,
                validate: {
                    min: {
                        args: [8],
                        msg: 'Minimum 8 characters required in password.',
                    },
                },
            },
        },
        {
            sequelize,
            underscored: true,
            timestamps: true,
            freezeTableName: true,
            modelName: 'account',
        },
    );

    return AccountModel;
};
