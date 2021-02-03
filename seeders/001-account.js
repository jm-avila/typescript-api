const { hash } = require('bcryptjs');

const salt = process.env.SALT || 10;

module.exports = {
    up: async (queryInterface) => {
        const transaction = await queryInterface.sequelize.transaction();
        const password = await hash('temp_password', salt);

        await queryInterface.bulkInsert(
            'account',
            [
                {
                    email: 'admin@mail.com',
                    password,
                },
            ],
            { transaction },
        );

        await transaction.commit();
    },
    down: async (queryInterface, sequelize) => {
        const { Op } = sequelize;

        const transaction = await queryInterface.sequelize.transaction();

        await queryInterface.bulkDelete('account', { email: { [Op.in]: ['admin@mail.com'] } }, { transaction });

        await transaction.commit();
    },
};
