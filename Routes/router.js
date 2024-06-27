const express = require("express");
const {
  getData,
  addData,
  getDataByID,
  UpdateById,
  DeleteById,
} = require("../Controllers/controllers");
// creating router
const router = express.Router();

router.get("/", getData).post("/", addData);

router
  .get("/:id", getDataByID)
  .put("/:id", UpdateById)
  .delete("/:id", DeleteById);

module.exports = {
  router,
};
