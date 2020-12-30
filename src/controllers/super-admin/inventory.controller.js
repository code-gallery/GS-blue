const inventoryService = require("../../services/inventory.service");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { to, ReE, TE, ReS } = require("../../services/util.service");
const { query } = require("winston");


const getInventories = async function (req, res) {
  let err;
  let start = new Date();
  const inventory = req.query;
  [err, inventories] = await to(inventoryService.getIventoryDetails(inventory));
  if (err) return ReE(res, err, 200);
  return ReS(
    res,
    {
      message: "Successful",
      response: inventories,
    },200,start);
};

module.exports = { getInventories };
