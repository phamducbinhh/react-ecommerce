1. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
2. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
3. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
4. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
5. Complete Add To Cart
   1. check exist item in the cart
   2. check count in stock in backend
6. Complete Cart Screen
   1. click handler for inc/dec item
   2. click handler for remove item
   3. click handler for checkout
7. Create Signin Screen
   1. create sign in form
   2. add email and password
   3. add signin button
8. Connect To MongoDB Database
   1. create atlas monogodb database
   2. install local mongodb database
   3. npm install mongoose
   4. connect to mongodb database
9. Seed Sample Users
   1. create user model
   2. seed sample userss
10. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
11. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
12. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api
13. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
14. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 cloumns
15. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
16. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
17. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
18. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
19. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header
20. Manage Products
    1. create products list ui
    2. implement backend api
    3. fetch data

POST – Create: Tạo dữ liệu mới
GET – Read: Lấy dữ liệu về
PUT – Update: Cập nhật dữ liệu
DELETE – Delete: Xóa dữ liệu
