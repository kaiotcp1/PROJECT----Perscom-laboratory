require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

console.log( 'teste ' + app.get('env'));

const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose
  .connect(DB, {})
  .then((con) => {
    console.log("DB Connection successful!");
  })
  .catch((error) => console.log(error));

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
