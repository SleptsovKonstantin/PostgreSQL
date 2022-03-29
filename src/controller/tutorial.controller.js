const { tutorials } = require("../models");
const db = require("../models");

const Tutorial = db.tutorials;

exports.create = (req, res) => {
  const { title, description, published } = req.body;
  const tutorial = {
    title,
    description,
    published: published ? published : false,
  };
  Tutorial.create(tutorial).then((data) => {
    res.send(data);
  });
};

exports.findAll = (req, res) => {
  Tutorial.findAll().then((data) => {
    res.send(data);
  });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Tutorial.findByPk(id).then((data) => {
    res.send(data);
  });
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
  Tutorial.destroy({where: { id: id }}).then((data) => {
    res.send(data);
  });
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({where: {}}).then(() => {
    res.send([]);
  });
};

exports.findTitle = (req, res) => {
  const { title } = req.params;
  Tutorial.findAll({ where: { title: title  } }).then((data) => {
    res.send(data);
  });
};
