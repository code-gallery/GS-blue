const companyRoutes = require('./company.superAdmin.routes');
const companyPortalRoutes = require('./company.routes');
const userRoutes = require('./user.routes');
const productRoutes = require('./products.routes');
const authRoutes = require('./auth.routes');
const cartRoutes = require('./cart.routes');
const categoriesRoutes = require('./categories.routes');
const checkoutRoutes = require('./checkout.routes');
const creditUserRoutes = require('./credituser.routes');
const inventoryRoutes = require('./inventory.routes');
// const ordersRoutes = require('./orders.routes');



module.exports = (app) => {
    app.use('/api/v1/superAdmin', companyRoutes);
    app.use('/api/v1/companyPortal/company', companyPortalRoutes);
    app.use('/api/v1/user', userRoutes);
    app.use('/api/v1/companyPortal/product', productRoutes);
    app.use('/', authRoutes);
    app.use('/api/v1/companyPortal/cart', cartRoutes);
    app.use('/api/v1/companyPortal/category', categoriesRoutes);
    app.use('/api/v1/companyPortal/checkout', checkoutRoutes);
    app.use('/api/v1/userCredit', creditUserRoutes);
    app.use('/api/v1/superAdmin/inventory', inventoryRoutes);
    // app.use('/', ordersRoutes);

}