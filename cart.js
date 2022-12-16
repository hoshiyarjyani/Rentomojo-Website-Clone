// navbar started Day-4 by Jyani
let dropdown_menu_open = document.getElementById("dropdown_menu_open");
dropdown_menu_open.addEventListener("click", function () {
  let menu = document.getElementById("menu");
  menu.style.display = "block";
});
let dropdown_menu_close = document.getElementById("dropdown_menu_close");
dropdown_menu_close.addEventListener("click", function () {
  let menu = document.getElementById("menu");
  menu.style.display = "none";
});
let location_data = [];
class location_obj {
  constructor(name, img) {
    this.name = name;
    this.img = img;
  }
}
let city1 = new location_obj("Hyderabad", "img/hyderabad_location.png");
let city2 = new location_obj("Chennai", "img/chennai_location.png");
let city3 = new location_obj("Gurgaon", "img/gurgaon_location.png");
let city4 = new location_obj("Noida", "img/noida_location.png");
let city5 = new location_obj("Delhi", "img/delhi_location.png");
let city6 = new location_obj("Mumbai", "img/mumbai_location.png");
let city7 = new location_obj("Pune", "img/pune_location.png");

location_data.push(city1, city2, city3, city4, city5, city6, city7);
showInLocationBox(location_data);
function showInLocationBox(data) {
  let box = document.getElementById("location_box");
  data.forEach(function (e) {
    let div = document.createElement("div");
    box.append(div);
    let img = document.createElement("img");
    img.src = e.img;
    div.append(img);
    div.addEventListener("click", function () {
      let p = document.getElementById("change_location");
      p.innerText = e.name;
    });
  });
}
let location_box_open = document.getElementById("location");
location_box_open.addEventListener("click", function () {
  let box = document.getElementById("location_box");
  box.style.display = "grid";
});
let location_box_close = document.getElementById("location_box_close");
location_box_close.addEventListener("click", function () {
  let box = document.getElementById("location_box");
  box.style.display = "none";
});


// search function  
function nav_search_fn() {
    let se = document.getElementById("nav_search").value;
    if (
      se == "bed" ||
      se == "chair" ||
      se == "sofa" ||
      se == "baby" ||
      se == "kitchen" ||
      se == "living"
    ) {
      window.location.href = "furniture.html";
    } else if (
      se == "refrigerator" ||
      se == "tv" ||
      se == "ac" ||
      se == "refrigerator" ||
      se == "air" ||
      se == "refrigerator"
    ) {
      window.location.href = "appliances.html";
    }
  }
  
//cart data

let cartArr = JSON.parse(localStorage.getItem("cartpage")) || [];
function cart_clicked() {
  let login_status = JSON.parse(localStorage.getItem("loginsuccess"));
  if (login_status == true) {
    window.location.href = "cart.html";
  } else {
    alert("Login first!!");
  }
}

// login signup started
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
    alert("Logout Success!!!");
    window.location.href = "index.html";
  }
}
document.addEventListener("mouseup", function (e) {
  let div = document.getElementById("login_popup");
  if (!div.contains(e.target)) {
    div.style.display = "none";
  }
});
let login_data_submit_button = document.getElementById(
  "login_data_submit_button"
);
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
      };
      localStorage.setItem("user_login_data", JSON.stringify(obj));
      localStorage.setItem("loginsuccess", true);
      show_name_login_user();
      alert("Login successfull");
    } else {
      alert("OTP not match");
    }
  }
});
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

function goToHome() {
  window.location.href = "index.html";
}
// navbar ended
if (
  localStorage.getItem("cartpage") == null ||
  localStorage.getItem("cartpage") == "null"
) {
  // let box=document.querySelector("body");
  // let div=document.createElement("div");
  // div.innerText="Cart is Empty!!";
  // div.style.textAlign="center";
  // div.style.marginTop="20vh";
  // div.style.fontSize="22px"
  // let div1=document.createElement("div");
  // div1.innerText="Go Back...";
  // div1.style.textAlign="center";
  // div1.style.fontSize="18px"
  // div1.style.color="blue";
  // div1.style.cursor="pointer"
  // div1.addEventListener("click",function(){
  //     window.location.href="index.html"
  // })
  // box.append(div,div1);
} else {
  let cartArr = JSON.parse(localStorage.getItem("cartpage"));
  function displayCart(data) {
    let tot = 0;
    let checkout = document.getElementById("checkout");
    checkout.innerHTML = "";
    let box = document.getElementById("cart");
    box.innerHTML = "";
    let total = document.createElement("div");
    total.setAttribute("id", "carttotal");
    let tot1 = document.createElement("h1");
    let tot2 = document.createElement("button");
    tot2.innerText = "Checkout";
    tot2.addEventListener("click", function () {
      
      window.location.href = "paypage.html";
    });
    total.append(tot1, tot2);
    checkout.append(total);
    data.forEach((e, i) => {
      let div = document.createElement("div");
      div.setAttribute("class", "cartItem");
      box.append(div);
      let img = document.createElement("img");
      img.src = e.img;
      img.style.width = "85%";
      let name = document.createElement("h2");
      name.innerText = e.title;
      let price = document.createElement("h3");
      price.innerText = "₹" + e.price;
      tot = tot + Number(e.price);
      let remove = document.createElement("button");
      remove.innerText = "Remove";
      remove.addEventListener("click", function () {
        cartArr.splice(i, 1);
        localStorage.setItem("cartpage", JSON.stringify(cartArr));
        displayCart(cartArr);
        window.location.href = "cart.html";
      });
      remove.setAttribute("class", "remove_btn");
      div.append(img, name, price, remove);
    });
    tot1.innerText = "Total is :- ₹" + tot;
  }
  displayCart(cartArr);
}

let empC = document.getElementById("emptyCart");
let dataWithCart = document.getElementById("cart");

if (cartArr.length === 0) {
  empC.style.display = "block";
  dataWithCart.style.visibility = "hidden";
} else {
  empC.style.display = "none";
  dataWithCart.style.visibility = "visible";
}
