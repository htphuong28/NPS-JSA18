//vong lap for: while, do while, for
// //in ra man hinh console tu 1 -> 10
// // while: ktdk r moi chay code
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// //sau vong lap, i = 11, in ra duoc 0 --> 10

// //do while: chay 1 lan duy nhat dau tien roi moi ktdk
// do {
//     console.log(i);
//     i++;
// } while (i<=10);


// for (let i = 0;i<5;i++) {
//     console.log(i)
// }


//Tinh tong day so tu 1 den 10

// let S=0;
// for(let i=1;i<=10;i++) {
//     S+=i;
// }

// console.log(S);


// let arrNew = [4,5,8,7];

// //arrNew.length la so phan tu trong mang
// //arrNew.push(a) -> them phan tu vao cuoi mang
// arrNew.push(3,2,6);
// //arrNew.unshift(a,b,c) --> them phan tu vao dau mang
// arrNew.unshift(0);
// //arrNew.shift() --> xoa 1 phan tu o dau mang
// arrNew.shift();
// //arrNew.pop() --> xoa 1 phan tu o cuoi mang
// arrNew.pop()
// console.log(arrNew);

//xu li du lieu o giua mang: xoa phan tu so 2
// arrNew.splice(3,1,1.5);
/*
cu phap arr.splice(box1,box2,box3)
- box1: vi tri phan tu muon edit
- box2: so phan tu muon xoa o vi tri do
- box3: so phan tu muon them vao mang tai vi tri do
*/
// console.log(arrNew);

/*yeu cau bai toan: menu nha hang với mảng ban đầu cho: let menu = ["cơm rang","phở","sườn chua ngọt"]
1. Khi mới vào trang web hiện thông báo "Mời người dùng nhập vào C,R,U,D"
2. Kiểm tra người dùng nhập vào gì --> xử lí đk như sau
Nếu nhập C --> Hiển thị thông báo "Mời người dùng nhập vào món ăn mới muốn thêm" ==> hiển thị ra mảng món ăn đó trên màn hình
Nếu nhập R --> Hiển thị toàn bộ món ăn đang có trong mảng
Nếu nhập U --> Hiển thị thông báo "Mời người dùng nhập tên món ăn muốn thay thế" ==> hiển thị thông báo "Mời người dùng nhập tên món mới"
Nếu nhập D --> Hiển thị thông báo "Mời người dùng nhập tên món ăn muốn xóa"
*/

//Kiến thức: tìm kiếm trong mảng với filter
let arrMenu = ["cơm rang","rau xào","cơm chiên"]
//tìm kiếm vị trí món rau xào trong mảng
let vitriMonRauXao = arrMenu.indexOf("rau xào");
console.log("Vi tri Mon Rau Xao: ", vitriMonRauXao);

//update tên món ăn vừa rồi thành món khác

arrMenu[vitriMonRauXao] = "rau mồng tơi"
console.log(arrMenu);

// đề bài yêu cầu người dùng nhập vào
let input = prompt("Mời người dùng nhập vào C,R,U,D")
console.log("input:",input);

let vitrimenu =document.querySelector(".menu")

function themmon () {
    if(input =="C") {
        let monmoi = prompt("Mời người dùng nhập món ăn mới muốn thêm");
        arrMenu.push(monmoi);
        vitrimenu.innerHTML = arrMenu;
    } else if (input == "R") {
        vitrimenu.innerHTML = arrMenu;
    } else if (input == "U") {
        let chonmon = prompt("Mời người dùng nhập tên món ăn muốn thay thế");
        let vitrichonmon = arrMenu.indexOf(chonmon);
        let thaythemon = prompt ("Mời người dùng nhập tên món mới");
        arrMenu.splice(vitrichonmon,1,thaythemon);
        vitrimenu.innerHTML = arrMenu;
    } else if(input == "D") {
        let monxoa = prompt ("Mời người dùng nhập tên món ăn muốn xóa");
        let vitrimonxoa = arrMenu.indexOf(monxoa);
        arrMenu.splice(vitrimonxoa,1,);
        vitrimenu.innerHTML = arrMenu;
    } else alert("Không thỏa mãn")
}


themmon()
