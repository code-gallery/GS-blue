const { to, TE } = require("../services/util.service");
const Models = require("../models/model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { query } = require("express");
const { forEach } = require("lodash");
const dbConnection = require("../data/database/db");
const { TEXT } = require("sequelize");
const _ = require("lodash");
const CommonService = require("../services/common.service");


const createCartSummary = async (cartInfo) => {
  let finditem = await Models.carts.findOne({
    where: { item_code: cartInfo.item_code },
    raw: true
  });
  console.log(finditem)
  if (finditem) TE("Product Already in Cart");
  return await Models.carts.create(cartInfo);
};

const getCartDetails = async (cartDetails) => {
  let [err, cart] = await to(Models.carts.findAndCountAll(cartDetails));
  if (err) TE(err.message);
  return cart.rows;
};

module.exports = { createCartSummary, getCartDetails };
