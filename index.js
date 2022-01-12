// Bài 1
// Khối 1: số ngày làm do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: lương = lương 1 ngày * số ngày làm
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: tiền lương nhân viên
const soNgayLam = Number;
const luong1Ngay = 100000;
const luong = luong1Ngay * soNgayLam;
console.log("tiền lương nhân viên:", luong);

// Bài 2
// Khối 1: 5 số thực do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: giá trị trung bình = tổng 5 số thực / 5
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: giá trị trung bình
const soThuc1 = Number;
const soThuc2 = Number;
const soThuc3 = Number;
const soThuc4 = Number;
const soThuc5 = Number;
const trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log("giá trị trung bình:", trungBinh);

// Bài 3
// Khối 1: số tiền USD do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: số tiền sau quy đổi = số tiền USD * 23500
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: VND
const USD = Number;
const VND = 23500;
const quyDoi = USD * VND;
console.log("VND:", quyDoi);

// Bài 4
// Khối 1: Chiều cao và chiều rộng của hình chữ nhật do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức diện tích và chu vi hình chữ nhật
// * diện tích = chiều cao * chiều rộng; chu vi = (chiều cao + chiều rộng) * 2
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: Diện tích và chu vi hình chữ nhật
const chieuCao = Number;
const  chieuRong = Number;
const dienTich = chieuCao *  chieuRong; 
const chuVi = (chieuCao + chieuRong) * 2;
console.log("diện tích:", dienTich);
console.log("chu vi:", chuVi);

// Bài 5
// Khối 1: số có 2 chữ số do người dùng nhập
// *
// * Khối 2:
// * Bước 1: Khai báo các biến và gán giá trị mà người dùng nhập vào
// * Bước 2: Tính theo công thức: tổng 2 ký số = số hàng chục + số hàng đơn vị
// * Bước 3: Hiển thị kết quả cho người dùng
// *
// * Khối 3: tổng 2 ký số
const so = 48;
const hangChuc = Math.floor(so / 10);
const hangDonVi = Math.floor(so % 10);
const tong = hangChuc + hangDonVi
console.log("tổng 2 ký số:", tong);
