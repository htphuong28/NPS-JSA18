localStorage.setItem("menu", JSON.stringify(["rau xào", "thịt luộc", "gà rán"]))

let input = prompt("Mời người dùng nhập vào 1 trong 4 ký tự C, R, U, D")

function createItem() {
    let monmoi = prompt("Mời người dùng nhập món ăn muốn thêm vào menu")
    let menu = JSON.parse(localStorage.getItem("menu"))
    menu.push(monmoi)
    localStorage.setItem("menu",JSON.stringify(menu))
}

function readItem() {
    let menu = JSON.parse(localStorage.getItem("menu"))
    alert(menu.join(", "))
    localStorage.setItem("menu",JSON.stringify(menu))
}

function updateItem() {
    let mondoi = prompt("Mời người dùng nhập vào tên món muốn update")
    let menu = JSON.parse(localStorage.getItem("menu"))
    let result =menu.indexOf(mondoi)
    if(result==-1) {
        alert("Không tồn tại món "+mondoi)
    } else {
        let monmoi = prompt("Mời người dùng nhập vào tên món ăn mới")
        menu.splice(result,1,monmoi)
        localStorage.setItem("menu",JSON.stringify(menu))
    }
}

function deleteItem() {
    let menu = JSON.parse(localStorage.getItem("menu"))
    let monxoa = prompt("Mời người dùng nhập vào tên món muốn Delete")
    let result = menu.indexOf(monxoa)
    if(result == -1) {
        alert("Không tồn tại món "+monxoa)
    } else {
        menu.splice(result,1)
        localStorage.setItem("menu",JSON.stringify(menu))
    }
}


if(input == 'C') createItem()
else if(input=='R') readItem()
else if(input=='U') updateItem()
else if(input=='D') deleteItem()

// do{
//     let input = prompt("Mời người dùng nhập vào 1 trong 4 ký tự C, R, U, D")
//     if(input == 'C') createItem()
//     else if(input=='R') readItem()
//     else if(input=='U') updateItem()
//     else if(input=='D') deleteItem()
    
// } while(input == 'C'| input=='R' | input =='U' | input =='D')
