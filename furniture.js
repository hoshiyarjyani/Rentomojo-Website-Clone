// featching product
async function dataFetch() {
  try {
    let dataRequest = await fetch("./allData.json");
    if (dataRequest.ok) {
      //alert("Hurry, fatched daa done!!");
      let realData = await dataRequest.json();
      // console.log(realData);

      let bed = document.getElementById("bedroom");
      let l_room = document.getElementById("living");
      let kitchen = document.getElementById("kitchen");
      let babyf = document.getElementById("baby");
      let wfh = document.getElementById("wfh");

      function initial() {
        bed.checked = true;
        display(realData[1].bedroom);
      }
      initial();

      bed.addEventListener("change", function () {
        if (bed.checked === true) {
          l_room.checked = false;
          kitchen.checked = false;
          babyf.checked = false;
          wfh.checked = false;
          setTimeout(function () {
            display(realData[1].bedroom);
          }, 1000);
        }
      });

      wfh.addEventListener("change", function () {
        if (wfh.checked === true) {
          l_room.checked = false;
          kitchen.checked = false;
          babyf.checked = false;
          bed.checked = false;
          setTimeout(function () {
            display(realData[4].wfh);
          }, 1000);
        }
      });

      babyf.addEventListener("change", function () {
        if (babyf.checked === true) {
          l_room.checked = false;
          kitchen.checked = false;
          bed.checked = false;
          wfh.checked = false;
          setTimeout(function () {
            display(realData[3].baby);
          }, 1000);
        }
      });

      l_room.addEventListener("change", function () {
        if (l_room.checked === true) {
          bed.checked = false;
          kitchen.checked = false;
          babyf.checked = false;
          wfh.checked = false;
          setTimeout(function () {
            display(realData[0].livingroom);
          }, 1000);
        }
      });

      kitchen.addEventListener("change", function () {
        if (kitchen.checked === true) {
          l_room.checked = false;
          bed.checked = false;
          babyf.checked = false;
          wfh.checked = false;
          setTimeout(function () {
            display(realData[2].kitchen);
          }, 1000);
        }
      });
    } else {
      alert("Bad request has been made.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}
dataFetch();

function display(alldata) {
 // console.log(alldata);
  let cont = document.getElementById("product_containor");
  cont.innerHTML = "";

  alldata.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class", "product_cards");

    let btn_div = document.createElement("div");
    btn_div.setAttribute("class", "view");

    let btn = document.createElement("button");
    btn.innerText = "Quick View";
    btn.setAttribute("id", "viewbtn");

    btn.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(e));
      window.location.href = "new-product-page.html";
    });

    btn_div.append(btn);

    let span = document.createElement("span");
    span.innerText = "mo";
    span.setAttribute("class", "mo");

    let i = document.createElement("img");
    i.src = e.img;
    i.style.width = "100%";
    let t = document.createElement("h3");
    t.innerText = e.title;
    let p = document.createElement("p");
    p.innerText = e.price + "/";
    p.style.display = "inline";

    div.append(i, t, p, span, btn_div);

    cont.append(div);
  });
}


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
    se == "air"
  ) {
    window.location.href = "appliances.html";
  }
}

// navbar started
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

function goToHome() {
  window.location.href = "index.html";
}
