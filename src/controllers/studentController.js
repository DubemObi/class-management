const Students = require("../models/studentsModel");

exports.createStudent = async (req, res) => {
  const { firstName, lastName, age, level } = req.body;
  const saveStudent = Students.build({
    firstName,
    lastName,
    age,
    level,
  });
  await saveStudent.save();
  res.status(201).json({
    status: "success",
    data: saveStudent,
  });
};

exports.getAll = async (req, res) => {
  const allData = await Students.findAll();
  res.json(allData);
};

exports.getOne = async (req, res) => {
  const user = await Students.findAll({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.update = async (req, res) => {
  const { age, level } = req.body;
  const user = await Students.update(
    {
      age: age,
      level: level,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  res.status(200).json({
    status: "success",
    data: user,
  });
};

exports.delete = async (req, res) => {
  await Students.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/");
};
