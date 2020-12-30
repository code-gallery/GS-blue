const express = require('express');
const router = express.Router();
const companyController = require('../controllers/super-admin/company.controller');
const locationController = require('../controllers/super-admin/location.controller');
const OrderController = require('../controllers/super-admin/OrderController');
const upload = require("../middleware/upload");



router.get('/', (req, res) => {
    res.json({
        message: "Welcome to DKM Blue Api" 
    })
})


router.post('/company/save',upload.fields([{
    name: 'bannerImage', maxCount: 1
  }, {
    name: 'logoImage', maxCount: 1
  }]), companyController.addEditCompany);
  
router.get('/company/companies', companyController.getCompanies);
router.get('/company/users', companyController.getLocationsBasedUser);
router.get('/location/locations', companyController.getLocations);

router.get('/salesOrder/locationPurchase', locationController.getPurchaseLocations);
router.get('/orders/pending', OrderController.getPendingOrders);
router.get('/orders/wareHouse', OrderController.getWithWarehouseOrders);
router.get('/orders/completed', OrderController.getCompletedOrders);
router.get('/order', OrderController.getOrderDetail);
router.get('/order/invoice', OrderController.getOrderInvoice);
router.get('/completedOrder', OrderController.getCompletedOrderDetail);




// router.post('/api/v1/superAdmin/company/save',upload.fields([{
//     name: 'bannerImage', maxCount: 1
//   }, {
//     name: 'logoImage', maxCount: 1
//   }]), companyController.addEditCompany);
  
// router.get('/api/v1/superAdmin/company/companies', companyController.getCompanies);
// router.get('/api/v1/superAdmin/company/users', companyController.getLocationsBasedUser);
// router.get('/api/v1/superAdmin/company/locations', companyController.getLocations);
// router.get('/api/v1/superAdmin/salesOrder/locationPurchase', locationController.getPurchaseLocations);
// router.get('/api/v1/superAdmin/orders/pending', OrderController.getPendingOrders);
// router.get('/api/v1/superAdmin/orders/wareHouse', OrderController.getWithWarehouseOrders);
// router.get('/api/v1/superAdmin/order', OrderController.getOrderDetail);
// router.get('/api/v1/superAdmin/order/invoice', OrderController.getOrderInvoice);


// router.get('/api/v1/superAdmin/location/locations', companyController.getLocations);



module.exports = router;