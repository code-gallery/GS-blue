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