function  goToHome(){
    window.location.href="index.html";
}

function show_login(){
    let ID_data = document.getElementById("login_id_data").value;
    let name_data = document.getElementById("login_name_data").value;
    sessionStorage.setItem("key-name",JSON.stringify(name_data));
    let pass = document.getElementById("login_otp_data").value;

    if(ID_data==="" || pass===""){
        alert("Fill All Inputs first");
    } else if(ID_data === "0060" && pass === "1234"){
        alert("successfully logged in");
        window.location.href = "adminpost.html";
    } else{
        alert("Not a valid Admin ID/Password");
    }
}