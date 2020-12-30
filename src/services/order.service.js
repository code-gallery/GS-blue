const { to, TE,totalIncGST } = require("./util.service");
const Models = require("../models/model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const _ = require("lodash");
const CommonService = require("./common.service");
const dbConnection = require("../data/database/db");

const getOrdersList = async (salesOrder) => {
  
  let limit = 10;
  companyQuery = {
    where: { 'Order Status': 0 },
    raw: true,
  };

  companyQuery.limit = limit;
  //if (_.isEmpty(salesOrder)) TE("Params are not set");
  let page = salesOrder.pageNumber != 0 ? salesOrder.pageNumber : 1;
  companyQuery.offset = (page - 1) * limit;

  if(salesOrder.orderNo)
    companyQuery.where["No_"] = salesOrder.orderNo;


   let rawQuery = "SELECT  salesHeader.[Order Date],salesHeader.No_,salesHeader.[Order Status],customer.Name,customer.[CUSTOMER GROUP], "+
                     "salesHeader.[Assigned User ID], "+
                     "( SELECT "+
	                      "SUM(salesLine.[Amount Including VAT]) "+
		                    "FROM ["+process.env.BC_DB_NAME+"$Sales Line] as salesLine "+
		                    "WHERE salesLine.[Document No_] = salesHeader.[No_] "+
		                  ") as OrderValue " +
	                  "FROM  ["+process.env.BC_DB_NAME+"$Sales Header] as salesHeader "+
                    "INNER JOIN ["+process.env.BC_DB_NAME+"$Customer] AS customer ON salesHeader.[Sell-to Customer No_]=customer.No_"
                 
      rawQuery +=" WHERE salesHeader.[Order Status]=0"
      
    if(salesOrder.orderNo)     
       rawQuery +=" AND salesHeader.No_="+salesOrder.orderNo;

       rawQuery +=  " ORDER BY salesHeader.[Order Date] DESC";
       rawQuery +=  " OFFSET "+(page - 1) * limit+" ROWS FETCH NEXT "+limit+" ROWS ONLY"

        try {
    
          const orders = await dbConnection.query(rawQuery);

          let [err, OrderCount] = await to(
            Models[process.env.BC_DB_NAME+'$Sales Header'].count(companyQuery )
          );

          //console.log('OrderCount',OrderCount);
      
           if (err) TE(err.message);

          paginationOutPut = await CommonService.paginationOutPut(
            orders[0],
            page,
            limit,
            OrderCount
          );
          return paginationOutPut;

    } catch (error) {
      if (error) TE(error.message);
    }
 };

 const getCompletedOrdersList = async (salesOrder) => {
  
  let limit = 10;
  companyQuery = {
    where: {},
    raw: true,
  };

  companyQuery.limit = limit;
  //if (_.isEmpty(salesOrder)) TE("Params are not set");
  let page = salesOrder.pageNumber != 0 ? salesOrder.pageNumber : 1;
  companyQuery.offset = (page - 1) * limit;

  if(salesOrder.orderNo)
    companyQuery.where["No_"] = salesOrder.orderNo;


   let rawQuery = "SELECT  salesInvoice.[Order Date],salesInvoice.[Posting Date],salesInvoice.No_,customer.Name,customer.[CUSTOMER GROUP], "+
                     "( SELECT "+
	                      "SUM(salesLine.[Amount Including VAT]) "+
		                    "FROM ["+process.env.BC_DB_NAME+"$Sales Invoice Line] as salesLine "+
		                    "WHERE salesLine.[Document No_] = salesInvoice.[No_] "+
		                  ") as OrderValue " +
	                  "FROM  ["+process.env.BC_DB_NAME+"$Sales Invoice Header] as salesInvoice "+
                    "INNER JOIN ["+process.env.BC_DB_NAME+"$Customer] AS customer ON salesInvoice.[Sell-to Customer No_]=customer.No_"
      
    if(salesOrder.orderNo)     
       rawQuery +=" WHERE salesInvoice.No_="+salesOrder.orderNo;

       rawQuery +=  " ORDER BY salesInvoice.[Order Date] DESC";
       rawQuery +=  " OFFSET "+(page - 1) * limit+" ROWS FETCH NEXT "+limit+" ROWS ONLY"

        try {
    
          const orders = await dbConnection.query(rawQuery);

         // console.log('order',orders);
                      
          let [err, OrderCount] = await to(
            Models[process.env.BC_DB_NAME+'$Sales Invoice Header'].count(companyQuery )
          );

          //console.log('OrderCount',OrderCount);
      
           if (err) TE(err.message);

          paginationOutPut = await CommonService.paginationOutPut(
            orders[0],
            page,
            limit,
            OrderCount
          );
          return paginationOutPut;

    } catch (error) {
      if (error) TE(error.message);
    }
 };

const getOrderDetail = async(query) => {

  let limit = 10;
  companyQuery = {
    where: { 'No_': query.orderNo },
    attributes: ["Order Date","No_","Assigned User ID","Order Status"],
    include: [{
      model:Models[process.env.BC_DB_NAME+'$Customer'],
     required: true, // inner join
      attributes: ["Name","COMPANY LOGO","Company Banner Image"],
    }],
    raw: true
  }

    companyQuery.limit = limit;
    //if (_.isEmpty(salesOrder)) TE("Params are not set");
    let page = query.pageNumber != 0 ? query.pageNumber : 1;
    companyQuery.offset = (page - 1) * limit;
  
    let [err, orderDetail] = await to(
     Models[process.env.BC_DB_NAME+'$Sales Header'].findAndCountAll(companyQuery )
    );

    if (err) TE(err.message);

    productQuery = {
      where: { 'Document No_': query.orderNo },
      include: [{ 
          model:Models[process.env.BC_DB_NAME+'$Item Attributes'],
        }
      ],
    }

    let [error, products] = await to(
      Models[process.env.BC_DB_NAME+'$Sales Line'].findAndCountAll(productQuery )
    );

//console.log(products.rows);

    if (error) TE(error.message);

     const  { rows } =  orderDetail;
     const order = [ { customerDetail: rows,  products: products.rows }]

     paginationOutPut = await CommonService.paginationOutPut(
      order,
       page,
       limit,
       orderDetail.count
     );

      return paginationOutPut;
  };

  const getCompletedOrderDetail = async(query) => {

    let limit = 10;
    companyQuery = {
      where: { 'No_': query.orderNo },
      attributes: ["Order Date","Posting Date","No_"],
      include: [{
        model:Models[process.env.BC_DB_NAME+'$Customer'],
       required: true, // inner join
        attributes: ["Name","COMPANY LOGO","Company Banner Image"],
      }],
      raw: true
    }
  
      companyQuery.limit = limit;
      //if (_.isEmpty(salesOrder)) TE("Params are not set");
      let page = query.pageNumber != 0 ? query.pageNumber : 1;
      companyQuery.offset = (page - 1) * limit;
    
      let [err, orderDetail] = await to(
       Models[process.env.BC_DB_NAME+'$Sales Invoice Header'].findAndCountAll(companyQuery )
      );
  
      if (err) TE(err.message);
  
      productQuery = {
        where: { 'Document No_': query.orderNo },
        include: [{ 
            model:Models[process.env.BC_DB_NAME+'$Item Attributes'],
          }
        ],
      }
  
      let [error, products] = await to(
        Models[process.env.BC_DB_NAME+'$Sales Invoice Line'].findAndCountAll(productQuery )
      );
  
  //console.log(products.rows);
  
      if (error) TE(error.message);
  
       const  { rows } =  orderDetail;
       const order = [ { customerDetail: rows,  products: products.rows }]
  
       paginationOutPut = await CommonService.paginationOutPut(
        order,
         page,
         limit,
         orderDetail.count
       );
  
        return paginationOutPut;
    };

  const getLatestStockQuantity = async (itemNo,size) => {
    
  const query = "select sum([Quantity]) as quantity,[Item No_] FROM [dbo].[DKMTEST16Dec19$Item Ledger Entry]  WHERE [Item No_] = 'JOH146' AND [Variant Code]= '2XL' "+
  "GROUP BY [Item No_],[Variant Code]";
    try {
      
      return await dbConnection.query(query);

   
    } catch (error) {
      throw new Error(error);
    }

  }

  const getOrderInvoice = async(query) => {

    let limit = 10;
    companyQuery = {
      where: { 'No_': query.orderNo },
      attributes: ["Order Date","No_","Assigned User ID","Order Status"],
      include: [{
        model:Models[process.env.BC_DB_NAME+'$Customer'],
       required: true, // inner join
        attributes: ["Name","COMPANY LOGO","Company Banner Image"],
      }],
      raw: true
    }
  
      companyQuery.limit = limit;
      //if (_.isEmpty(salesOrder)) TE("Params are not set");
      let page = query.pageNumber != 0 ? query.pageNumber : 1;
      companyQuery.offset = (page - 1) * limit;
    
      let [err, orderDetail] = await to(
       Models[process.env.BC_DB_NAME+'$Sales Header'].findAndCountAll(companyQuery )
      );
  
      if (err) TE(err.message);
  
      productQuery = {
        where: { 'Document No_': query.orderNo },
        include: [{ 
            model:Models[process.env.BC_DB_NAME+'$Item Attributes'],
          }
        ],
      }
  
      let [error, products] = await to(
        Models[process.env.BC_DB_NAME+'$Sales Line'].findAndCountAll(productQuery ) 
      );
  
  //console.log(products.rows);
  
      if (error) TE(error.message);
      //if (err) TE(err.message);
       var stockCounts = [];
  
       await Promise.allSettled(
         /*
          This loop will fetch the 
         */
        products.rows.map(async (product, index) => {
           
          stockCounts[product.dataValues.No_] = await getLatestStockQuantity(product.dataValues.No_,product.dataValues['Variant Code'])
  
            return counts;
           
        })).then(async result => {
  
         // console.log('promise', stockCounts);
          let subTotalsIncGST = [];
          let subTotalsExGST = [];
          let allProducts = [];
          products.rows.map(async (product, index) => {          
            allProducts.push({ ...product.dataValues,soh:stockCounts[product.dataValues.No_][0][0].quantity});
            subTotalsIncGST.push(product.dataValues['Amount Including VAT']);
            subTotalsExGST.push(product.dataValues['Amount']);
          });
           
           const  { rows } =  orderDetail;
           const subTotalIncGST = subTotalsIncGST.reduce(function(a, b){
              return a + b;
            }, 0);
            const subTotalExGST = subTotalsExGST.reduce(function(a, b){
              return a + b;
            }, 0);

             const order = [ { 
                customerDetail: rows,  
                products: allProducts, 
                subTotalsincGST:subTotalIncGST,
                GST:totalIncGST(subTotalExGST,orderDetail['Currency code']),
                subTotalsexGST:subTotalExGST 
              }]
  
             paginationOutPut = await CommonService.paginationOutPut(
              order,
               page,
               limit,
               orderDetail.count
             );
             
             //return paginationOutPut;
        })
        return paginationOutPut;
    };
module.exports = {getOrdersList,getCompletedOrdersList,getOrderDetail,getOrderInvoice,getCompletedOrderDetail};
