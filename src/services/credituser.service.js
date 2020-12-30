const {to, TE} = require('./util.service');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { query } = require("express");
const { forEach } = require("lodash");
const { TEXT } = require("sequelize");
const _ = require('lodash');
const Models = require('../models/model')
const CommonService= require('./common.service');


const createUserCredit = async (creditInfo) => {
//   console.log("hello user", creditInfo);
//   let findUser = await Models.user_credits.findOne({
//     where: { ucid: creditInfo.ucid },
//     raw: true
//   });
//   console.log(findUser);
//   if (findUser) TE("Credit Already Exists");
  return await Models.user_credits.create(creditInfo);
};

// const updateUserCredit = async (userInfo) => {
//   return await Models.user_credits.update(userInfo,{ where: { email: userInfo.email } });
// };

// const deleteUserCredit = async (userInfo) => {
//     return await Models.user_credits.destroy({ where: { email: userInfo.email } });
//   };


  module.exports = {createUserCredit};
