const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize(process.env.DB_URL, {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       rejectUnauthorized: false,
//     },
//   }
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("connected to database");
//   })
//   .catch((err) => {
//     console.log(err);
//     console.log("could not connect to database");
//   });

// module.exports = sequelize;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/database.sqlite'
})

module.exports = sequelize;