const express = require("express");
var mysql = require("mysql");
var mssql = require("mssql");
const jwt = require("jsonwebtoken");
var secretkey = "SOMESECRET";
const fetch = require("node-fetch");
var config = require("../../config/config");
const { json } = require("body-parser");

// const getCheckOutDetails = function (req, res) {
//     console.log("Checkout page called");
//     res.send({ msg: "Checkout called.......",})
//     var connection = mssql.createConnection(config.sandboxdb);
//     connection.connect((err) => {
//         console.log("Error :- ", err);
//         res.send({ msg: "Checkout called.......", data })
//         let query_statement = `SELECT [City],[Country_Region Code],[Post Code] FROM [dbo].[DKMTEST16Dec19$Ship-to Address] WHERE [Customer No_]='C0000086' AND [City]='Wonga Hills';`
//         connection.query(query_statement, (resp, data) => {
//             res.send({ msg: "Checkout called.......", data })
//         });
//     });  
// }

const getCheckOutDetails = function (req,res){
    let productObj = req.body;
    console.log("productObj :",productObj);

    jwt.verify(req.token, secretkey, (err, decode)=>{
     
        if(err){
            return res.send({status : "UNAUTHORIZED"})
        }
        if(decode.loggUser.id){
            mssql.connect(config.sandboxdb,(err)=>{
                if(!err){
                    console.log("DB Connected");
                    
                    let query_statement = `SELECT [Customer No_],[Code],[Name],[Name 2],[Address],[Address 2],[City],[Phone No_],[Post Code],[County],[E-Mail] FROM [dbo].[DKMTEST16Dec19$Ship-to Address] WHERE [Code] = 'LAKE GRACE';`                  
                    var response;
                    mssql.query(query_statement,(resp, data) => {
                        response = data;
                        for(a in data){
                            console.log(a);
                        }
                        res.send({msg : "Checkout called.......",products:response['recordset']})                                                      
                })
               
                }else{
                    console.log(err);
                }
          })

        }
    })
    
}

const oderReview = function (req,res){

    jwt.verify(req.token, secretkey, (err, decode)=>{
     
        if(err){
            return res.send({status : "UNAUTHORIZED"})
        }
        if(decode.loggUser.id){
            mssql.connect(config.sandboxdb,(err)=>{
                if(!err){
                    console.log("DB Connected");
                    
                    let query_statement = `SELECT [Customer No_],[Code],[Name],[Name 2],[Address],[Address 2],[City],[Phone No_],[Post Code],[County],[E-Mail] FROM [dbo].[DKMTEST16Dec19$Ship-to Address] WHERE [Code] = 'LAKE GRACE';`                  
                    var response;
                    mssql.query(query_statement,(resp, data) => {
                        response = data;
                        for(a in data){
                            console.log(a);
                        }
                        res.send({msg : "Checkout called.......",products:response['recordset']})                                                      
                })
               
                }else{
                    console.log(err);
                }
          })

        }
    })
    
}

module.exports = { getCheckOutDetails,oderReview };