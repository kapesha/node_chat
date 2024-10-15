import 'dotenv/config';
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'postgres',
  username: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  password: '123456789',
});
