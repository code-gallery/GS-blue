// Authenticating API
const express = require("express");
const jwt = require('jsonwebtoken');

var mysql = require("mysql");
var secretkey = "SOMESECRET"

//Database connection
const authenticate = async function (req, res) {
  let user = req.body;
  console.log("user :",user);
  var config = {
    user: "root",
    password: "password",
    host: "localhost",
    database: "dkmdatabase",
    
  };
  var connection = mysql.createConnection(config);
  connection.connect((err) => {
    console.log("Error :- ", err);   
    let query_statement = `SELECT * FROM dkmdatabase.dkmusers where username = '${user.username}'; `;
     connection.query(query_statement, (resp, data) => {       
      if (data.length == 0) {
        res.send({ msg: "Authentication Failed" });     
      } else {
        let loggUser = data.find(dbuser=>{
          return dbuser.username == user.username 
        })
        
        console.log("loggUser :",loggUser);

          if(loggUser.password == user.password){
            jwt.sign({loggUser}, secretkey, { expiresIn: '60s' }, (err, token) => {
                   
              res.status(200).send({ msg: "Authentication Successfull",token });

            });
          }else{
            res.send({ msg: "The username or password you entered is incorrect" });
          }
        }
    });
  });
};

module.exports = authenticate;

