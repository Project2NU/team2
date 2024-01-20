
const sequelize = require('../config/connection');
const { User, Book } = require('../models');

const userData = require('./userData.json');
const bookSeedData = require('./bookSeedData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Book.bulkCreate(bookSeedData, {

    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
