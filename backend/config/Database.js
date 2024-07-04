import { Sequelize } from "sequelize";

const db = new Sequelize("bkk_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
