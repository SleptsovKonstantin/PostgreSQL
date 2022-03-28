const express = require("express");
const cors = require("cors");
const app = express();
// const routes = require('./src/routes')
const db = require('./models')

app.use(cors());
app.use(express.json());
// app.use(routes);

db.sequelize.sync({force: true});

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
