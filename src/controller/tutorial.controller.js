const { tutorials } = require("../models");
const db = require("../models");

const Tutorial = db.tutorials;

exports.create = (req, res) => {
  const body = req.body;
  const { title, description, published } = req.body;
  const tutorial = {
    title,
    description,
    published: published ? published : false,
  };
  try {
    if (
      body.hasOwnProperty("title") &&
      body.hasOwnProperty("description") &&
      body.hasOwnProperty("published")
    ) {
      Tutorial.create(tutorial).then((data) => {
        res.send(data);
      });
    } else {
      res.status(422).send("Error! Params not correct");
    }
  } catch (err) {
    console.log(`Errrror ${err}`);
  }
};

exports.findAll = (req, res) => {
  try {
    Tutorial.findAll().then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(422).send("Error! Params not correct");
  }
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  console.log(typeof +id);
  if (+id !== 0) {
    Tutorial.findByPk(id)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(404).send("Error");
      });
  }else{
    res.status(422).send("Error! Params not correct");
  }
};

exports.update = (req, res) => {
  const body = req.body;
  const { id, title } = body;
  Tutorial.update({ title }, { where: { id: id } }).then(() => {
    Tutorial.findAll().then((data) => {
      res.send(data);
    });
  });
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;
  Tutorial.destroy({ where: { id: id } }).then((data) => {
    res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({ where: {} }).then(() => {
    res.send([]);
  });
};

exports.findTitle = (req, res) => {
  const { title } = req.params;
  Tutorial.findAll({ where: { title: title } }).then((data) => {
    res.send(data);
  });
};
