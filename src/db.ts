import { Sequelize } from 'sequelize';
import options from './config/sequelizeConfig';
import { createModels } from './models';

const sequelize = new Sequelize(options);

const db = createModels(sequelize);

export default db;
