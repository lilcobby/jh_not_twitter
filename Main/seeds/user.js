const User = require("../models/User");

const userData = [
  {
    username: "user1",
    email: "user1@gmail.com",
    password: "password1",
  },
  {
    username: "user2",
    email: "user2@gmail.com",
    password: "password2",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
