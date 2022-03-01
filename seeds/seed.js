const sequelize = require("../config/connection");
const { User, Tutor, Review } = require("../models");
//imports the user, review, and tutor seed files.
const userData = require("./userSeeds.json");
const reviewData = require("./reviewSeeds.json");
const tutorData = require("./tutorSeeds.json");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Tutor.bulkCreate(tutorData);
  await Review.bulkCreate(reviewData);
  process.exit(0);
};

seedAll();
