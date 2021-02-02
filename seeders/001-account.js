module.exports = {
    up: async (queryInterface) => {
        const transaction = await queryInterface.sequelize.transaction();
        await queryInterface.bulkInsert(
            'account',
            [
                {
                    email: 'admin@mail.com',
                    password: 'temp_password',
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
