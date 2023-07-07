/*yeu cau bai toan: menu nha hang với mảng ban đầu cho: let menu = ["cơm rang","phở","sườn chua ngọt"]
1. Khi mới vào trang web hiện thông báo "Mời người dùng nhập vào C,R,U,D"
2. Kiểm tra người dùng nhập vào gì --> xử lí đk như sau
Nếu nhập C --> Hiển thị thông báo "Mời người dùng nhập vào món ăn mới muốn thêm" ==> hiển thị ra mảng món ăn đó trên màn hình
Nếu nhập R --> Hiển thị toàn bộ món ăn đang có trong mảng
Nếu nhập U --> Hiển thị thông báo "Mời người dùng nhập tên món ăn muốn thay thế" ==> hiển thị thông báo "Mời người dùng nhập tên món mới"
Nếu nhập D --> Hiển thị thông báo "Mời người dùng nhập tên món ăn muốn xóa"
*/

let menu = ["cơm rang", "phở", "sườn chua ngọt"];

// Nhận thông tin người dùng nhập vào ban đầu

let input;
input = prompt("Mời người dùng nhập vào C, R, U, D");

//Mẹo ép kiểu dữ liệu sang number
// input = Number(prompt("Mời người dùng nhập vào C, R, U, D"))

//Kiểm tra kiểu dữ liệu biến
// console.log(
//     typeof input
// )

if (input === 'c') {
    menu.push(
        prompt("Mời người dùng nhập vào món ăn muốn thêm")
    );
}

else if(input === 'r') {
    alert("Danh sách món ăn: " + menu)
}

else if(input === 'u') {
    let vitriMonAnThayThe = menu.indexOf(
        prompt("Mời người dùng nhập vào tên món ăn muốn thay thế")
        )
    if(vitriMonAnThayThe <0) {
        alert("Món ăn này hiện không có trong menu")
    }
    //update món ăn tại vị trí muốn thay thế

    menu[vitriMonAnThayThe] = prompt("Mời người dùng cập nhật món ăn mới");
}

else if(input === 'd') {
    let vitriMonAnXoa = menu.indexOf(
        prompt("Mời người dùng nhập tên món ăn muốn xóa")
    )
    if(vitriMonAnXoa <0) {
        alert("Món ăn này hiện không có trong menu")
    }
    menu.splice(vitriMonAnXoa,1,)
}

else alert("Không tồn tại yêu cầu")

console.log(menu)

//yêu cầu thêm: nhập 1 để tiếp tục, nhập q để quit
