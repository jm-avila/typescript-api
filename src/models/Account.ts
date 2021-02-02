import {
    Sequelize,
    Model,
    UUID,
    UUIDV4,
    STRING
} from 'sequelize';

class AccountModel extends Model {
    public readonly id!: string;

    public email!: string;

    public password!: string;
}

export const AccountFactory = (sequelize: Sequelize) => AccountModel.init(
    {
        id: {
            type: UUID,
            primaryKey: true,
            defaultValue: UUIDV4,
        },
        email: {
            type: STRING(240),
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: STRING(255),
            allowNull: false,
        }
    },
    {
        sequelize,
        underscored: true,
        timestamps: true,
        freezeTableName: true,
        modelName: "account",
    },
);

