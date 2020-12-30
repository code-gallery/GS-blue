const {to, TE} = require('../services/util.service');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const _ = require('lodash');
const Models = require('./../models/model')
const CommonService= require('../services/common.service');


const create = async (userInfo) => {
  let findUser = await Models.users.findOne({
    where: { email: userInfo.email },
    raw: true
  });
  if (findUser) TE("User Already Exists");
  return await Models.users.create(userInfo);
};

const update = async (userInfo) => {
  return await Models.users.update(userInfo,{ where: { email: userInfo.email } });
};

const deleteUser = async (userInfo) => {
    return await Models.users.destroy({ where: { email: userInfo.email } });
  };

const getUsers = async (userList) => {

    let limit =10;
    userQuery = {
        where: {},
        order: [
            ['username', 'DESC']
        ],
        raw: true
    };

    userQuery.limit = limit;
    if (_.isEmpty(userList)) TE("Params are not set");
    let page = userList.pageNumber != 0 ? userList.pageNumber : 1;
    userQuery.offset = (page-1) * limit;
    userQuery.raw = true;

    // userQuery.where.email =
    // {
    //     [Op.like]: `%${userList.keyword}%`
    // }
    let [err, user] = await to (Models.users.findAndCountAll(userQuery));
    if (err) TE(err.message);
    paginationOutPut = await CommonService.paginationOutPut(user.rows, page, limit, user.count);
    return paginationOutPut;
}


module.exports = {create, update,deleteUser, getUsers};