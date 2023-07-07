// Local Storage là gì?
/*
- Dạng lưu trữ dữ liệu trong trình duyệt web
- Tắt/mở lại trình duyệt thì không mất dữ liệu
- Chỉ lưu trữ dữ liệu dưới dạng
*/
// Cú pháp khởi tạo lưu trữ trên localstorage với biến
//Cách 1
localStorage.setItem("menu", JSON.stringify(["rau, thịt, cá"]));

//Cách 2
localStorage.obj = JSON.stringify(
    {
        name: "OK",
        age: 20,
        address: "Hà Nội"
    }
);

// Truy vấn dữ liệu trong localStorage:

let menu = JSON.parse(localStorage.getItem("menu"));
menu.push("ếch");
localStorage.setItem("menu", JSON.stringify(menu));
