const { tutorials } = require("../models");
const db = require("../models");

const Tutorial = db.tutorials;

exports.create = (req, res) => {
  const { title, description, published } = req.body;
  if (title && description && published) {
    const tutorial = {
      title,
      description,
      published: published ? published : false,
    };
    Tutorial.create(tutorial).then((data) => {
      res.send(data);
    });
  } else {
    res.send({
      message: `Create new task was failing, because body is empty. Please check the data you send.`,
    });
  }
};

exports.findAll = (req, res) => {
  Tutorial.findAll({
    order: ["id"],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ message: `id is not in the database` });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  Tutorial.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send({ message: `id is not in the database` });
      }
    })
    .catch((err) => {
      res.send({ message: `Error.you need to enter a number` });
    });
};

exports.update = (req, res) => {
  const body = req.body;
  const { id } = body;
  if (
    id &&
    (body.hasOwnProperty("title") ||
      body.hasOwnProperty("description") ||
      body.hasOwnProperty("published"))
  ) {
    Tutorial.update(body, { where: { id } }).then((result) => {
      if (result == 1) {
        Tutorial.findAll({
          order: [["id"]],
        })
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.send({ message: `Error` });
          });
      } else {
        res.send({
          message: `id=${id} not found in database. Check if id is correct`,
        });
      }
    });
  } else {
    res.send({
      message: `id=${id} is empty.`,
    });
  }
};

exports.deleteOne = (req, res) => {
  const { id } = req.params;
  if (id) {
    Tutorial.destroy({ where: { id } })
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.send({ message: `id is not in the database` });
        }
      })
      .catch((err) => {
        res.send({ message: `Error.you need to enter a number` });
      });
  } else {
    res.send({ message: `Error. Empty id` });
  }
};

exports.deleteAll = (req, res) => {
  Tutorial.destroy({ where: {} })
    .then(() => {
      res.send([]);
    })
    .catch((err) => {
      res.send({ message: `Error. check request url` });
    });
};

exports.findTitle = (req, res) => {
  const { title } = req.params;
  Tutorial.findAll({ where: { title } })
    .then((data) => {
      if (data.length !== 0) {
        res.send(data);
      } else {
        res.send({ message: `Error. Not title` });
      }
    })
    .catch((err) => {
      res.send({ message: `Error.you need to enter a number` });
    });
};
