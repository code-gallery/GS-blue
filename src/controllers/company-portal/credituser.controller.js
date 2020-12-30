const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { to, ReE, TE, ReS } = require("../../services/util.service");
const credituserService = require("../../services/credituser.service");

//type 0 for create, type 1 for update, type 2 for delete
// const addEditUserCredit = async (req, res) => {
//   console.log("user controller");
//   let err, userDetails, msg;
//   let start = new Date();
//   const creditInfo = req.body;
//   if (creditInfo.type == 0) {
//     [err, userDetails] = await to(credituserService.createUserCredit(creditInfo));
//     if (err) return ReE(res, err, 200);
//     msg = "User Created successfully";
//   } else if (userInfo.type == 1) {
//     [err, userDetails] = await to(credituserService.updateUserCredit(creditInfo));
//     if (err) return ReE(res, err, 200);
//     msg = "User Details Updated successfully";
//   } else if (userInfo.type == 2) {
//     [err, userDetails] = await to(credituserService.deleteUserCredit(creditInfo));
//     if (err) return ReE(res, err, 200);
//     msg = "User Deleted successfully";
//   } else {
//     TE("Somthing wrent wrong");
//   }
//   return ReS(res,{
//       message: msg,
//     },200,start);
// };

const addEditUserCredit = async (req, res) => {
    console.log("hello user credit");
    let err, userCreditDetails;
    let start = new Date();
    const creditInfo = req.body;
    [err, userCreditDetails] = await to (credituserService.createUserCredit(creditInfo));
    if (err) return ReE(res, err, 200);
    return ReS(res, {
      message: "User Credit Added Successfully"
    }, 200, start);
}


module.exports = { addEditUserCredit };
