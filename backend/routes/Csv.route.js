const router = require("express").Router();
const Order = require("../models/Orders.model");
const fs = require("fs").promises;
const path = require("path");
const moment = require("moment");
const json2csv = require("json2csv").parse;

const relevantData = [
  "title",
  "description",
  "quantity",
  "date",
  "deadline",
  "todo.polishing",
  "todo.sizing",
  "todo.lazer",
  "todo.engraving",
  "todo.plating",
  "todo.rhodium",
  "todo.cleaning",
  "_id",
  "recycled",
];

router.get("/write", async (req, res) => {
  try {
    let csv;
    const mongoDataBase = await Order.find();
    csv = json2csv(mongoDataBase, { fields: relevantData });

    const dateTime = moment().valueOf();
    const filepath = "../downloads/" + "csv-" + dateTime + ".csv";

    await fs.writeFile(filepath, csv, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    res.download(filepath, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File was downloaded!");
        fs.unlink(filepath, function (err) {
          console.log(err);
        })
          .then(() => {
            console.log("File was deleted successfully!");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
