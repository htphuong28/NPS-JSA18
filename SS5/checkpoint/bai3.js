let form = document.querySelector("#form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(form.Name.value)
    let data = {
        name: form.Name.value,
        dob: form.DOB.value,
        email: form.Email.value,
        gender: form.gender.value,
        password: form.password.value
    }
    localStorage.setItem("Data", JSON.stringify(data));
})