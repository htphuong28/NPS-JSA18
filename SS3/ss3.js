//Duyệt mảng

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

//in ra từng phần tử mảng lên màn hình console

// for (let i = 0; i<= arr.length - 1; i++) {
//     console.log(arr[i])
// }

//For in
// for(let i in arr) {
//     console.log(arr[i]);
// }

/*
i: vị trí phần tử của mảng
*/

// for (let i of arr) {
//     console.log(i)
// }

//in ra phần tử mảng


//giới thiệu về đối tượng (Object) trong js
//Khai báo đối tượng
let obj = {
    //thuộc tính
    name: "Hà Phương",
    age: 17,
    gender: "female",
    id: "001306",
    hobbies: ["podcast","music","learn"],
    //phương thức
    say: function (params) {
        alert("Hello, how are you?")
    }
}

obj.say()

//mục đích: object dùng trong lưu trũ tài khoản

//thê mới một thuộc tính
obj.job = "dev";

//xóa một thuộc tính
delete obj.id
console.log(obj);

obj.code = function() {
    alert("I am coder")
};

console.log(obj);
