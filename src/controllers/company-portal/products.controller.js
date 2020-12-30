const express = require("express");
var mssql = require("mssql");
const jwt = require("jsonwebtoken");
var secretkey = "SOMESECRET";


var config = {
    user: "dkmecomm",
    password: "303SOH_g_r_m",
    server: "dkmdb.database.windows.net",
    database: "sandbox",
}

const getAllProducts = function (req,res){
    console.log("getAllProducts called");
  
    jwt.verify(req.token, secretkey, (err, decode)=>{
     
        if(err){
            return res.send({status : "UNAUTHORIZED"})
        }
        if(decode.loggUser.id){
            mssql.connect(config,(err)=>{
                if(!err){
                    console.log("DB Connected");
                    let query_statement = `SELECT * FROM DKMTEST16Dec19$Item`;
                    mssql.query(query_statement,(resp, data) => {
                        let allProducts=[]
                        for(a in data){
                            console.log(data[a])
                            allProducts.push(data[a])
                          }
        
                        res.send({msg : "getAllProducts called.......",products:allProducts})
                })
                }else{
                    console.log(err);
                }
          })
            // return res.send({
            //     status : "AUTHORIZED"
            // })
        }
    })
    

}


const getProductDetails = function (req,res){
    
    res.send({msg : "getProduct Details called"})
}

module.exports = { getAllProducts,getProductDetails }