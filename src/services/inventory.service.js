const { to, TE } = require("./util.service");
const Models = require("../models/model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { query } = require("express");
const { forEach } = require("lodash");
const dbConnection = require("../data/database/db");
const { TEXT } = require("sequelize");
const _ = require("lodash");
const CommonService = require("./common.service");


const getIventoryDetails = async (inventory) => {
  let limit = 10;
  inventoryQuery = {
    where: {},
    order: [["Item No_", "DESC"]],
    attributes: ["Description","Item No_","Quantity","Variant Code"],
    raw: true,
  };

  inventoryQuery.limit = limit;
  if (_.isEmpty(inventory)) TE("Params are not set");
  let page = inventory.pageNumber != 0 ? inventory.pageNumber : 1;
  inventoryQuery.offset = (page - 1) * limit;
  inventoryQuery.raw = true;
//   inventoryQuery.where.Name = {
//     [Op.like]: `%${inventory.keyword}%`,
//   };
//   inventoryQuery.where["Customer Type"] = 0;
  let [err, order] = await to(
    Models['DKM$Item Ledger Entry'].findAndCountAll(inventoryQuery)
  );
  if (err) TE(err.message);
  paginationOutPut = await CommonService.paginationOutPut(
    order.rows,
    page,
    limit,
    order.count
  );
  return paginationOutPut;
// return await dbConnection.query("SELECT * FROM [DKM$Sales Header] ");
};

module.exports = {getIventoryDetails};
