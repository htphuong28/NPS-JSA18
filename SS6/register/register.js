let form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let data = {
        email: form.email.value,
        password: form.password.value,
    }
    localStorage.setItem("Data", JSON.stringify(data));
})