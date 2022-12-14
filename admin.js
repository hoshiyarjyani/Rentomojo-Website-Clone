function  goToHome(){
    window.location.href="index.html";
}
function show_login_popup() {
    let menu = document.getElementById("menu");
    menu.style.display = "none";
    let but = document.getElementById("home_login_button");
    if (but.innerText == "LOGIN/SIGNUP") {
        let div = document.getElementById("login_popup");
        div.style.display = "flex";
    } else {
        localStorage.setItem("user_login_data", null);
        localStorage.setItem("loginsuccess", false);
        but.innerText = "LOGIN/SIGNUP";
        alert("Logout Successfull");
    }
}
document.addEventListener("mouseup", function (e) {
    let div = document.getElementById("login_popup");
    if (!div.contains(e.target)) {
        div.style.display = "none";
    }
})
let login_data_submit_button = document.getElementById("login_data_submit_button");
login_data_submit_button.addEventListener("click", function () {
    let phone = document.getElementById("login_phone_data").value;
    let name = document.getElementById("login_name_data").value;
    let otp = document.getElementById("login_otp_data").value;
    if (phone == "" || name == "" || otp == "") {
        alert("Fill All Inputs");
    } else {
        if (otp == "1234") {
            let obj = {
                name: name,
                mobile: phone,
            }
            localStorage.setItem("user_login_data", JSON.stringify(obj));
            localStorage.setItem("loginsuccess", true);
            show_name_login_user();
            alert("Login successfull");

        } else {
            alert("OTP not match");
        }
    }
})
show_name_login_user();

function show_name_login_user() {
    if (localStorage.getItem("user_login_data") == null) {
        localStorage.setItem("loginsuccess", false);
    } else {
        localStorage.setItem("loginsuccess", true);
        let details = JSON.parse(localStorage.getItem("user_login_data"));
        let but = document.getElementById("home_login_button");
        but.innerText = details.name;
    }
}