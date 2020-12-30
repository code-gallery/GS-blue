const {to, TE} = require('../services/util.service');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { query } = require("express");
const { forEach } = require("lodash");
const { TEXT } = require("sequelize");
const _ = require('lodash');
const Models = require('./../models/model')
const CommonService= require('../services/common.service');
const dbConnection = require("../data/database/db");

const getCategoryList = async (categoryList) => {

    console.log(">>>>>>>>>>"+Models.DKM$Category);

    let limit =10;
    categoryQuery = {
        where: {},
        order: [],
        raw: true
    };

    categoryQuery.limit = limit;
    if (_.isEmpty(categoryList)) TE("Params are not set");
    let page = categoryList.pageNumber != 0 ? categoryList.pageNumber : 1;
    categoryQuery.offset = (page-1) * limit;
    categoryQuery.raw = true;

    let rawQuery = "SELECT  ItemWiseCategory.[Category],MasterCategory.[Banner] "+
                    "FROM  ["+process.env.BC_DB_NAME+"$Item wise Category] as ItemWiseCategory "+
                    "INNER JOIN ["+process.env.BC_DB_NAME+"$Master Category] AS MasterCategory ON ItemWiseCategory.Category=MasterCategory.Code"


                    try {

                        const category = await dbConnection.query(rawQuery);

                        let [err, CategoryCount] = await to(
                          Models[process.env.BC_DB_NAME+'$Item wise Category'].count(categoryQuery )
                        );

                        if (err) TE(err.message);

                        paginationOutPut = await CommonService.paginationOutPut(
                          category[0],
                          page,
                          limit,
                          CategoryCount
                        );
                        return paginationOutPut;

                  } catch (error) {
                    if (error) TE(error.message);
                  }

    
    // categoryQuery.where["Customer No_"] =  {
    //     [Op.like]: `%${categoryList.keyword}%`,
    //   };
    // console.log(">>>>>>>>>11>"+Models[process.env.BC_DB_NAME+"$Item wise Category"]);
    // let [err, category] = await to (Models[process.env.BC_DB_NAME+"$Item wise Category"].findAll(categoryQuery));
    // if (err) TE(err.message);
    // paginationOutPut = await CommonService.paginationOutPut(category.rows,  page, limit, category.count);
    // return paginationOutPut;
}




module.exports = { getCategoryList };