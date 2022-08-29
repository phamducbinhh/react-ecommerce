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


1. Thêm định tuyến trang
   1. npm  react-router-dom
   2. tạo lộ trình cho màn hình chính
   3. tạo bộ định tuyến cho màn hình sản phẩm
2. Tạo máy chủ Node.JS
   1. chạy npm init trong thư mục gốc
   2. Cập nhật loại set package.json: module
   3. Thêm .js vào các mục nhập
   4. npm cài đặt nhanh
   5. tạo server.js
   6. thêm lệnh bắt đầu làm phụ trợ nút / server.js
   7. yêu cầu thể hiện
   8. Tạo lộ trình cho / trả lại phần phụ trợ đã sẵn sàng.
   9. chuyển products.js từ frontend sang backend
   10. tạo lộ trình cho / api / products
   11. trả lại sản phẩm
   12. chạy npm start
3. Tìm nạp sản phẩm từ chương trình phụ trợ
   1. đặt proxy trong package.json
   2. npm cài đặt axios
   3. sử dụng móc trạng thái
   4. sử dụng móc hiệu ứng
   5. sử dụng móc giảm tốc
4. Quản lý trạng thái bằng móc giảm tốc
   1. xác định bộ giảm tốc
   2. cập nhật dữ liệu tìm nạp
   3. nhận trạng thái từ usReducer
5. Hoàn thành Thêm vào giỏ hàng
   1. kiểm tra mặt hàng tồn tại trong giỏ hàng
   2. kiểm tra số lượng trong kho trong phần phụ trợ
6. Hoàn thành màn hình giỏ hàng
   1. nhấp chuột xử lý cho mục inc / dec
   2. nhấp vào trình xử lý để loại bỏ mục
   3. nhấp chuột xử lý để thanh toán
7. Tạo màn hình đăng nhập
   1. tạo biểu mẫu đăng nhập
   2. thêm email và mật khẩu
   3. thêm nút đăng nhập
8. Kết nối với cơ sở dữ liệu MongoDB
   1. tạo cơ sở dữ liệu atlas monogodb
   2. cài đặt cơ sở dữ liệu mongodb cục bộ
   3. npm cài đặt mongoose
   4. kết nối với cơ sở dữ liệu mongodb
9. Người dùng mẫu hạt giống
   1. tạo mô hình người dùng
   2. người dùng mẫu hạt giống
10. Tạo API phụ trợ đăng nhập
    1. tạo api đăng nhập
    2. npm cài đặt jsonwebtoken
    3. định nghĩa createToken
11. Tạo màn hình vận chuyển
    1. tạo đầu vào biểu mẫu
    2. xử lý lưu địa chỉ giao hàng
    3. thêm thanh hướng dẫn thanh toán
12. Tạo màn hình đăng ký
    1. tạo biểu mẫu đầu vào
    2. xử lý trình
    3. tạo api phụ trợ
13. Triển khai màn hình Chọn phương thức thanh toán
    1. tạo biểu mẫu đầu vào
    2. xử lý trình
14. Tạo màn hình đặt hàng
    1. tạo api phụ trợ cho order /: id
    2. tìm nạp api đặt hàng trong giao diện người dùng
    3. hiển thị thông tin đặt hàng trong 2 cloumns
15. Thanh toán đơn hàng bằng PayPal
    1. tạo id khách hàng paypal
    2. tạo api để trả về id khách hàng
    3. cài đặt react-paypal-js
    4. sử dụng PayPalScriptProvider trong index.js
    5. sử dụng usePayPalScriptReducer trong Màn hình đặt hàng
    6. thực hiện chức năng loadPaypalScript
    7. kết xuất nút paypal
    8. triển khai chức năng thanh toán onApprove
    9. tạo api lệnh thanh toán trong phần phụ trợ