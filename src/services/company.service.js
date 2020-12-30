const { to, TE, formatDate,incrementNo } = require("../services/util.service");
const Models = require("../models/model");
const Sequelize = require("sequelize");
const dbConnection = require("../data/database/db");
const Op = Sequelize.Op;
const _ = require("lodash");
const CommonService = require("../services/common.service");


const create = async (companyInfo) => {
    //console.log(companyInfo);
      const lastCustomerId = await Models[process.env.BC_DB_NAME+'$No_ Series Line'].findOne({ where : { 'Series Code': 'CUSTOMER'}})
      const incrementedId = 'C000'+incrementNo(lastCustomerId.dataValues['Last No_ Used']);
      /*
        Above code will fetch the last inserted No_ of customer table
        We will increment into it manually and add to customer query
      */

          const addQuery = "INSERT INTO [dbo].["+process.env.BC_DB_NAME+"$Customer]" +
          "([No_]"+
            ",[Name]"+
            ",[Search Name]"+
            ",[Name 2]"+
            ",[Address]"+
            ",[Address 2]"+
            ",[City]"+
            ",[Contact]"+
            ",[Phone No_]"+
            ",[Telex No_]"+
            ",[Document Sending Profile]"+
            ",[Ship-to Code]"+
            ",[Our Account No_]"+
            ",[Territory Code]"+
            ",[Global Dimension 1 Code]"+
            ",[Global Dimension 2 Code]"+
            ",[Chain Name]"+
            ",[Budgeted Amount]"+
            ",[Credit Limit (LCY)]"+
            ",[Customer Posting Group]"+
            ",[Currency Code]"+
            ",[Customer Price Group]"+
            ",[Language Code]"+
            ",[Statistics Group]"+
            ",[Payment Terms Code]"+
            ",[Fin_ Charge Terms Code]"+
            ",[Salesperson Code]"+
            ",[Shipment Method Code]"+
            ",[Shipping Agent Code]"+
            ",[Place of Export]"+
            ",[Invoice Disc_ Code]"+
            ",[Customer Disc_ Group]"+
            ",[Country_Region Code]"+
            ",[Collection Method]"+
            ",[Amount]"+
            ",[Blocked]"+
            ",[Invoice Copies]"+
            ",[Last Statement No_]"+
            ",[Print Statements]"+
            ",[Bill-to Customer No_]"+
            ",[Priority]"+
            ",[Payment Method Code]"+
            ",[Last Modified Date Time]"+
            ",[Last Date Modified]"+
            ",[Application Method]"+
            ",[Prices Including VAT]"+
            ",[Location Code]"+
            ",[Fax No_]"+
            ",[Telex Answer Back]"+
            ",[VAT Registration No_]"+
            ",[Combine Shipments]"+
            ",[Gen_ Bus_ Posting Group]"+
            ",[Picture]"+
            ",[GLN]"+
            ",[Post Code]"+
            ",[County]"+
            ",[E-Mail]"+
            ",[Home Page]"+
            ",[Reminder Terms Code]"+
            ",[No_ Series]"+
            ",[Tax Area Code]"+
            ",[Tax Liable]"+
            ",[VAT Bus_ Posting Group]"+
            ",[Reserve]"+
            ",[Block Payment Tolerance]"+
            ",[IC Partner Code]"+
            ",[Prepayment _]"+
            ",[Partner Type]"+
            ",[Image]"+
            ",[Privacy Blocked]"+
            ",[Disable Search by Name]"+
            ",[Preferred Bank Account Code]"+
            ",[Cash Flow Payment Terms Code]"+
            ",[Primary Contact No_]"+
            ",[Contact Type]"+
            ",[Responsibility Center]"+
            ",[Shipping Advice]"+
            ",[Shipping Time]"+
            ",[Shipping Agent Service Code]"+
            ",[Service Zone Code]"+
            ",[Allow Line Disc_]"+
            ",[Base Calendar Code]"+
            ",[Copy Sell-to Addr_ to Qte From]"+
            ",[Validate EU Vat Reg_ No_]"+
            ",[Id]"+
            ",[Currency Id]"+
            ",[Payment Terms Id]"+
            ",[Shipment Method Id]"+
            ",[Payment Method Id]"+
            ",[Tax Area ID]"+
            ",[Contact ID]"+
            ",[Contact Graph Id]"+
            ",[ABN]"+
            ",[Registered]"+
            ",[ABN Division Part No_]"+
            ",[IRD No_]"+
            ",[S_T Type]"+
            ",[S_T Expiry Date]"+
            ",[WHT Business Posting Group]"+
            ",[Tax Document Type]"+
            ",[Customer Group]"+
            ",[Note]"+
            ",[Customer Group Code]"+
            ",[Customer Type]"+
            ",[Primary Color]"+
            ",[Secondary Color]"+
            ",[Company Banner Image]"+
            ",[Company Logo])"+
    "VALUES('"+incrementedId+"'"
    +",'"+companyInfo["Name"] +"'"
    +",'AdCreatorsdemo2'"
    +",'"+companyInfo["Address"] +"'"
    +",'"+companyInfo["Address 2"] +"'"
    +",' '"
    +",' '"
    +",'"+companyInfo["Phone No_"] +"'"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",0.0"
    +",0.0"
    +",'"+companyInfo["Currency Code"] +"'"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",0.0"
    +",0"
    +",0"
    +",0"
    +",0"
    +",' '"
    +",0"
    +",' '"
   +",'"+formatDate( new Date())+" 00:00:00'"
   +",'"+formatDate( new Date())+" 00:00:00'"
    +",0"
    +",0"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",0"
    +",'DOMESTIC'"
    +",NULL"
    +",' '"
    +",' '"
    +",'"+companyInfo["E-Mail"] +"'"
    +",'"+companyInfo["Home Page"] +"'"
    +",' '"
    +",' '"
    +",' '"
    +",' '"
    +",0"
    +",'DOMESTIC'"
    +",0"
    +",0"
    +",' '"
    +",0.0"
    +",0"
    +",'00000000-0000-0000-0000-000000000000'"
    +",0"
    +",0"
    +",' '"
    +",' '"
    +",' '"
    +",0"
    +",' '"
    +",0"
    +",' '"
    +",' '"
    +",' '"
    +",1"
    +",' '"
    +",0"
    +",0"
    +",'CF2F80A3-6304-4A0A-B6E9-E58BDD126CE3'"
    +",'00000000-0000-0000-0000-000000000000'"
    +",'B4F649D6-D3A9-4F95-B37C-64726A8B21D3'"
    +",'00000000-0000-0000-0000-000000000000'"
    +",'00000000-0000-0000-0000-000000000000'"
    +",'19E84079-F580-4C7E-BDBB-7C6DD9BA971C'"
    +",'00000000-0000-0000-0000-000000000000'"
    +",' '"
    +",' '"
    +",0"
    +",' '"
    +",' '"
    +",0"
    +",'1753-01-01 00:00:00.000'"
    +",' '"
    +",0"
    +",'"+companyInfo["Customer Group"] +"'"
    +",' '"
    +",'"+companyInfo["Customer Group Code"] +"'"
    +",'"+companyInfo["Customer Type"] +"'"
    +",'"+companyInfo["Primary Color"] +"' "
    +",'"+companyInfo["Secondary Color"] +"' "
    +",'"+companyInfo["Company Banner Image"] +"'"
    +",'"+companyInfo["Company Logo"] +"')"

    // let result = await dbConnection.query(addQuery);
    console.log("result",addQuery);

    let findUser = await dbConnection.query("SELECT Name FROM "+process.env.BC_DB_NAME+"$Customer WHERE Name = '"+companyInfo["Name"] +"'");
    
    if (_.compact(findUser)) {
        await dbConnection.query(
          addQuery
        );
       return await Models[process.env.BC_DB_NAME+'$No_ Series Line'].update({ 'Last No_ Used': incrementedId }, {
          where: {
            'Series Code': 'CUSTOMER'
          }
        });
    } else {
        TE("Company Already Exists");
    }
  }

const update = async (companyInfo) => {

  let findUser = await dbConnection.query(
    "SELECT * FROM DKMTEST16Dec19$Customer WHERE NAME = '" + companyInfo["Name"] + "'"
  );
  if (findUser) {
   
    return await dbConnection.query(
      "UPDATE DKMTEST16Dec19$Customer SET [Address]='" +
        companyInfo["Address"] +
        "', [Address 2] ='" +
        companyInfo["Addess 2"] +
        "', [Primary Color] = '" +
        companyInfo["Primary Color"] +
        "', [Secondary Color] = '" +
        companyInfo["Secondary Color"] +
        "', [Company Banner Image] = '" +
        companyInfo["Company Banner Image"] +
        "', [Company Logo] = '" +
        companyInfo["Company Logo"] +
        "' WHERE No_ = '" +
        companyInfo["No_"]
    );
  }
};

const deleteCompany = async (companyInfo) => {
  return await Models.DKM$Customer.destroy({ where: { Name: companyInfo.Name } });
};


const getCompanies = async (param) => {
  let limit = 15;
  companyQuery = {
    where: {},
  };

  companyQuery.limit = limit;
  if (_.isEmpty(param)) TE("Params are not set");
  let page = param.pageNumber != 0 ? param.pageNumber : 1;
  companyQuery.offset = (page - 1) * limit;

  companyQuery.where["Customer Type"] = 0;  


  let rawQuery = 'SELECT c.No_ ,c.Name ,c.[Customer Type],'+
 ' ( SELECT count(*) FROM ['+process.env.BC_DB_NAME+'$Customer] AS c2  WHERE c2.[Customer Type] = 1 AND c.[CUSTOMER GROUP] = c2.[CUSTOMER GROUP] ) as locations '+
 
 ' FROM ['+process.env.BC_DB_NAME+'$Customer] AS c'+
 ' WHERE c.[Customer Type] = 0';

 if(param.keyword)     
       rawQuery +=" AND c.Name LIKE '%"+param.keyword+"%'";


  rawQuery +=  " ORDER BY c.No_ DESC";
  rawQuery +=  " OFFSET "+(page - 1) * limit+" ROWS FETCH NEXT "+limit+" ROWS ONLY"

  let [error, TotalCompanies] = await to(
    Models[process.env.BC_DB_NAME+"$Customer"].count(companyQuery)
  );

  if (error) TE(error.message);

  const companies = await dbConnection.query(rawQuery);
 // console.log(companies);

  let customers = companies[0].map(company => company.No_)
 
  let [err, users] = await to (Models.users.count(
    { 
        where : {customer_no: customers },
        attributes: ['username','customer_no','profileimage'],
        group:'customer_no'
    }));

    if (err) TE(err.message);

   console.log(users);

    const companyList = [];

   companies[0].map(async (company, index) => {
          // this will filter the customer and get the active count user for compnay
      let filteredUser = users.filter( user => user.customer_no == company.No_ )

      companyList.push({ ...company , 
        active_user: filteredUser.length > 0 ?  filteredUser[0].count : 0,
        profile_image:  filteredUser.length > 0 ? filteredUser[0].profileimage :'' })
      
   })
    
   paginationOutPut = await CommonService.paginationOutPut(
     companyList,
     page,
     limit,
     TotalCompanies
   );

   return paginationOutPut;

 };

const getCompany =  async (query) => {
  let limit = 10;

  let [err, company] = await to(
    Models[process.env.BC_DB_NAME+"$Customer"].findByPk(query.customer_no)
  );

  company['COMPANY LOGO'] = process.env.APP_URL+"/resources/company/"+company['COMPANY LOGO'];
  company['COMPANY Banner Image'] = process.env.APP_URL+"/resources/company/"+company['COMPANY Banner Image'];

  if (err) TE(err.message);
  paginationOutPut = await CommonService.paginationOutPut(
    company,
    1,
    limit,1
  );
  return paginationOutPut;
} 

const getUsers = async (userList) => {
  let limit = 10;
  companyQuery = {
    where: {},
    order: [["Name", "DESC"]],
    attributes: ["Name"],
    raw: true,
  };

  companyQuery.limit = limit;
  let page = userList.pageNumber != 0 ? userList.pageNumber : 1;
  companyQuery.offset = (page - 1) * limit;
  companyQuery.raw = true;
  companyQuery.where["Customer Type"] = 0;
  companyQuery.where["Customer Group Code"] = "MICROSOFT";
  let [err, company] = await to(
    Models.DKM$Customer.findAndCountAll(companyQuery)
  );
  if (err) TE(err.message);
  return company.rows;
  // paginationOutPut = await CommonService.paginationOutPut(company.rows, page, limit, company.count);
  // return paginationOutPut;
};

const getLocations = async (locationList) => {
  let limit = 10;
  companyQuery = {
    where: {},
    order: [["Name", "DESC"]],
    attributes: ["Name"],
    raw: true,
  };

  companyQuery.limit = limit;
  if (_.isEmpty(locationList)) TE("Params are not set");
  let page = locationList.pageNumber != 0 ? locationList.pageNumber : 1;
  companyQuery.offset = (page - 1) * limit;
  companyQuery.raw = true;
  companyQuery.where.Name = {
    [Op.like]: `%${locationList.keyword}%`,
  };
  companyQuery.where["Customer Type"] = 0;
  let [err, company] = await to(
    Models[process.env.BC_DB_NAME+"$Customer"].findAndCountAll(companyQuery)
  );
  if (err) TE(err.message);
  paginationOutPut = await CommonService.paginationOutPut(
    company.rows,
    page,
    limit,
    company.count
  );
  return paginationOutPut;
};

module.exports = { create,update,deleteCompany,getCompanies, getUsers , getLocations,getCompany }