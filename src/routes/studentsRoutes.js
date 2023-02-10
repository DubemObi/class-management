const express = require("express");
const StudentsController = require("../controllers/studentController");
const studentsModel = require("../models/studentsModel");

const router = express.Router();

router
  .route("/")
  .post(StudentsController.createStudent)
  .get(StudentsController.getAll);

router
  .route("/:id")
  .get(StudentsController.getOne)
  .patch(StudentsController.update)
  .delete(StudentsController.delete);

module.exports = router;
