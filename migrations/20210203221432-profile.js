'use strict';

module.exports = {
    up: async (queryInterface) => {
        queryInterface.sequelize.query(`
      BEGIN;

      CREATE TABLE public.profile
      (
        id UUID DEFAULT uuid_generate_v4(),
        name varchar(100) NOT NULL,
        last_name varchar(100) NOT NULL,
        birthdate timestamptz NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now(),
        updated_at timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY (id),
        FOREIGN KEY (id)
          REFERENCES public.account (id)
          ON DELETE CASCADE
      );

      END;
    `);
    },

    down: async (queryInterface) => {
        queryInterface.sequelize.query(`
      BEGIN;

      DROP TABLE public.profile;

      END;
    `);
    },
};
