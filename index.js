const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const { DATABASS, DB_USER, DB_PASS, PORT } = process.env;
const studentRouter = require("./src/routes/studentsRoutes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = new Sequelize("dubemdb", DB_USER, DB_PASS, {
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database successfully");
  })
  .catch((err) => console.log(err, "This has an error"));

// app.post("/", async (req, res) => {
//   const { title, desc } = req.body;
//   const saveBlog = blog_table.build({
//     title,
//     desc,
//   });
//   await saveBlog.save();
//   res.send("Data posted");
// });

// app.get("/", async (req, res) => {
//   const allData = await blog_table.findAll();
//   res.json(allData);
// });

// app.get("/:id", async (req, res) => {
//   await blog_table.findAll({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.redirect("/");
// });

// app.put("/:id", async (req, res) => {
//   const data = req.body.data;
//   await blog_table.update(
//     {
//       desc: data,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   );
//   res.redirect("/");
// });

// app.delete("/:id", async (req, res) => {
//   await blog_table.destroy({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.redirect("/");
// });

app.use("/", studentRouter);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
