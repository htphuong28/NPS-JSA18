let n = Number(prompt("Nhập một số tự nhiên: "));
let vitri = document.querySelector(".tamgiac")

for(let i = n; i>0; i--) {
    for(let j = i; j>0; j--) {vitri.innerHTML+=`*`}
    vitri.innerHTML+=`\n`
}