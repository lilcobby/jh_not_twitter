const seedUsers = require("./user");
const seedPosts = require("./post");
const seedComments = require("./commment");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();

  process.exit(0);
};

seedAll();
