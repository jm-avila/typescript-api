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
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY (id)
      );

      END;
    `);
    },

    down: async (queryInterface) => {
        queryInterface.sequelize.query(`
      BEGIN;

      DROP TABLE public.account;

      END;
    `);
    },
};
