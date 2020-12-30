/**
 * @swagger
 *  /api/v1/superAdmin/company/companies:
 *    get:
 *     tags:
 *        - Company List
 *     summary: Get All Company list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *         - in: query
 *           name: pageNumber
 *           schema:
 *             type:number   
 *     responses:
 *        '200':
 *             description: Successfully Fetched The List Of Company
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

 /**
 * @swagger
 *  /api/v1/superAdmin/company/save:
 *    post:
 *     tags:
 *        - Company List
 *     summary: Add/Edit New/Existing Company to the list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - name: body
 *           in: body
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                        type: string
 *               ABN: 
 *                        type: number
 *               E-Mail:
 *                        type: string
 *               Phone No_:
 *                        type: number
 *               Address:
 *                        type: string
 *               Address 2:
 *                        type: string
 *               Home Page:
 *                        type: string
 *               Currency Id:
 *                        type: string 
 *               Customer Group:
 *                        type: string
 *               Customer Group Code:
 *                        type: string
 *               Customer Type:
 *                        type: string
 *               Primary Color:
 *                        type: string
 *               Secondary Color:
 *                        type: string
 *               Company Banner Image:
 *                        type: string
 *               Company Logo:
 *                        type: string                 
 *     responses:
 *        '200':
 *             description: New Company Added Successfully.
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

/**
 * @swagger
 *  /api/v1/user/save:
 *    post:
 *     tags:
 *        - User
 *     summary: Add/Edit/Delete User to the list, type 0 for create, type 1 for update, type 2 for delete
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - name: body
 *           in: body
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                        type: string
 *               mobile:
 *                        type: number
 *               email:
 *                        type: string
 *               locations:
 *                        type: string
 *               profileimage:
 *                        type: string               
 *     responses:
 *        '200':
 *             description: New User Added Successfully.
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

 /**
 * @swagger
 *  /api/v1/user/users:
 *    get:
 *     tags:
 *        - User
 *     summary: Get All User list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *         - in: query
 *           name: pageNumber
 *           schema:
 *             type:number   
 *     responses:
 *        '200':
 *             description: Successfully Fetched The List Of User
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

 

 /**
 * @swagger
 *  /api/v1/userCredit/save:
 *    post:
 *     tags:
 *        - User
 *     summary: Add Credits Company/Staff User
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - name: body
 *           in: body
 *           schema:
 *             type: object
 *             properties:
 *               credit_amount:
 *                        type: number
 *               credit_expiry:
 *                        type: string             
 *     responses:
 *        '200':
 *             description: User Credit Added Successfully.
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

 /**
 * @swagger
 *  /api/v1/superAdmin/location/locations:
 *    get:
 *     tags:
 *        - Locations
 *     summary: Get All Company list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *         - in: query
 *           name: pageNumber
 *           schema:
 *             type:number   
 *     responses:
 *        '200':
 *             description: Successfully Fetched The List Of Location
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

  /**
 * @swagger
 *  /api/v1/superAdmin/location/save:
 *    post:
 *     tags:
 *        - Locations
 *     summary: Add/Edit New/Existing Location to the list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - name: body
 *           in: body
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                        type: string
 *               ABN: 
 *                        type: number
 *               E-Mail:
 *                        type: string
 *               Phone No_:
 *                        type: number
 *               Address:
 *                        type: string
 *               Address 2:
 *                        type: string
 *               Home Page:
 *                        type: string
 *               Currency Id:
 *                        type: string 
 *               Customer Group:
 *                        type: string
 *               Customer Group Code:
 *                        type: string
 *               Customer Type:
 *                        type: string
 *               Primary Color:
 *                        type: string
 *               Secondary Color:
 *                        type: string
 *               Company Banner Image:
 *                        type: string
 *               Company Logo:
 *                        type: string                 
 *     responses:
 *        '200':
 *             description: New Location Added Successfully.
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

  /**
 * @swagger
 *  /api/v1/superAdmin/salesOrder/locationPurchase:
 *    get:
 *     tags:
 *        - Purchase History
 *     summary: Get Location/Company wise purchased history list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *         - in: query
 *           name: pageNumber
 *           schema:
 *             type:number   
 *     responses:
 *        '200':
 *             description: Successfully Fetched The List Of orders
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */
/**
 * @swagger
 *  /api/v1/companyPortal/category/getAllCategories:
 *    get:
 *     tags:
 *        - Category
 *     summary: Get All Category list
 *     produces:
 *         - application/json
 *     consumes:
 *         - application/json
 *     parameters:
 *         - in: query
 *           name: keyword
 *           schema:
 *             type: string
 *         - in: query
 *           name: pageNumber
 *           schema:
 *             type:number   
 *     responses:
 *        '200':
 *             description: Successfully Fetched The List Of Category
 *        '401':
 *             description: Unauthorized
 *        '500':
 *             description: Internal Server Error
 */

 


