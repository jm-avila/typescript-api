import { Sequelize, Model, UUID, UUIDV4, STRING } from 'sequelize';

export class AccountModel extends Model {
    public readonly id!: string;

    public email!: string;

    public password!: string;

    public readonly createdAt!: Date | string;

    public readonly updatedAt!: Date | string;
}

export const AccountFactory = (sequelize: Sequelize): typeof AccountModel => {
    AccountModel.init(
        {
            id: {
                type: UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            email: {
                type: STRING(100),
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: STRING(250),
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
