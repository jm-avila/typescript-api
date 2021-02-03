module.exports = {
    up: async (queryInterface) => {
        const transaction = await queryInterface.sequelize.transaction();

        const birthdate = new Date();
        birthdate.setFullYear(birthdate.getFullYear() - 30);

        const seedAccountId = await queryInterface.rawSelect(
            'account',
            {
                where: {
                    email: 'admin@mail.com',
                },
            },
            ['id'],
        );

        await queryInterface.bulkInsert(
            'profile',
            [
                {
                    id: seedAccountId,
                    name: 'Jose',
                    last_name: 'Avila',
                    birthdate,
                },
            ],
            { transaction },
        );

        await transaction.commit();
    },
    down: async (queryInterface, sequelize) => {
        const { Op } = sequelize;

        const transaction = await queryInterface.sequelize.transaction();

        const seedAccountId = await queryInterface.rawSelect(
            'account',
            {
                where: {
                    email: 'admin@mail.com',
                },
            },
            ['id'],
        );

        await queryInterface.bulkDelete('profile', { id: { [Op.in]: [seedAccountId] } }, { transaction });

        await transaction.commit();
    },
};
