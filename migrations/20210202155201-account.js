'use strict';

module.exports = {
    up: async (queryInterface) => {
        queryInterface.sequelize.query(`
      BEGIN;

      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      CREATE TABLE public.account
      (
        id UUID DEFAULT uuid_generate_v4(),
        email varchar(100) NOT NULL UNIQUE,
        password varchar(250) NOT NULL,
        PRIMARY KEY (id)
      );

      END;
    `);
    },

    down: async (queryInterface) => {
        queryInterface.sequelize.query(`
    `);
    },
};
