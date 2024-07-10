import { Sequelize } from "sequelize";
// const { Sequelize } = require("sequelize");

import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// const db = new Sequelize({
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DATABASE,
//   dialect: "mysql",
//   port: process.env.APP_PORT,
//   host: process.env.DB_HOST,
// });

export default db;
