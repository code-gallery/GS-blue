const express = require("express");
const categoryService = require("../../services/category.service");
const { to, ReE, TE, ReS } = require("../../services/util.service");

const getAllCategories = async function (req,res){
    let err, category;
    let start = new Date();
    const categoryList = req.query;
    
    [err, category] = await to(categoryService.getCategoryList(categoryList));
    if (err) return ReE(res, err, 200);
    return ReS(res,{
        message: "Successful",
        response: category,
        },200,start);
}

// const getAllCategoriesBanner = async function (req,res){
//     let err, category;
//     let start = new Date();
//     const categoryList = req.query;
    
//     [err, category] = await to(categoryService.getCategoryBanner(categoryList));
//     if (err) return ReE(res, err, 200);
//     return ReS(res,{
//         message: "Successful",
//         response: category,
//         },200,start);
// }

const getAllSubCategories= function (req,res){
    res.send({msg : "getAllSubCategories called"})

}

module.exports={getAllCategories,getAllSubCategories}