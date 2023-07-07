
//Bai 1

function giaithua(params) {
    let nhap = prompt("Nhập một số tự nhiên");
    let n = Number(nhap);
    let s = 1;
    for(let i=1; i<=n; i++) {
        s*=i;
    }
    let vitri = document.querySelector(".giaithua");
    vitri.innerHTML=`Giai thua cua ` +nhap+ ` la ` + s;
}

giaithua();

