const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { to, ReE, TE, ReS } = require("../services/util.service");
const userService = require("../services/user.service");

//type 0 for create, type 1 for update, type 2 for delete
const save = async (req, res) => {

  let err, userDetails, msg;
  let start = new Date();
  console.log(req.body);
  const userInfo = req.body;
   userInfo.profileimage = req.file.filename;
  if (userInfo.type == 0) {
    [err, userDetails] = await to(userService.create(userInfo));
    if (err) return ReE(res, err, 200);
    msg = "User Created successfully";
  } else if (userInfo.type == 1) {
    [err, userDetails] = await to(userService.update(userInfo));
    if (err) return ReE(res, err, 200);
    msg = "User Details Updated successfully";
  } else if (userInfo.type == 2) {
    [err, userDetails] = await to(userService.delete(userInfo));
    if (err) return ReE(res, err, 200);
    msg = "User Deleted successfully";
  } else {
    TE("Somthing wrent wrong");
  }
  return ReS(res,{
      message: msg,
    },200,start);
};

const getUsers = async function (req, res) {
  let err, user;
  let start = new Date();
  const userList = req.query;

  [err, user] = await to(userService.getUsers(userList));
  if (err) return ReE(res, err, 200);
  return ReS(res,user,200,start);
};

module.exports = { getUsers, save };
