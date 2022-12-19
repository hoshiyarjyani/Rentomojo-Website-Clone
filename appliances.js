// featching product
async function dataFetch() {
    try {
      let dataRequest = await fetch("./allData.json");
      if (dataRequest.ok) {
        //alert("Hurry, fatched daa done!!");
        let realData = await dataRequest.json();
       // console.log(realData);
  
        let fridge = document.getElementById("fridge");
        let tv = document.getElementById("tv");
        let wmachine = document.getElementById("wmachine");
        let ac = document.getElementById("ac");
        let aw_purifier = document.getElementById("aw_purifier");
  
        function initial() {
          fridge.checked = true;
          display(realData[5].refrigerator);
        }
        initial();
  
        fridge.addEventListener("change", function () {
          if (fridge.checked === true) {
            ac.checked = false;
            tv.checked = false;
            wmachine.checked = false;
            aw_purifier.checked = false;
            setTimeout(function () {
              display(realData[5].refrigerator);
            }, 1000);
          }
        });
  
        tv.addEventListener("change", function () {
          if (tv.checked === true) {
            ac.checked = false;
            fridge.checked = false;
            wmachine.checked = false;
            aw_purifier.checked = false;
            setTimeout(function () {
              display(realData[6].tv);
            }, 1000);
          }
        });
  
        wmachine.addEventListener("change", function () {
          if (wmachine.checked === true) {
            ac.checked = false;
            tv.checked = false;
            aw_purifier.checked = false;
            fridge.checked = false;
            setTimeout(function () {
              display(realData[8].WashingMachine);
            }, 1000);
          }
        });
  
        ac.addEventListener("change", function () {
          if (ac.checked === true) {
            tv.checked = false;
            fridge.checked = false;
            wmachine.checked = false;
            aw_purifier.checked = false;
            setTimeout(function () {
              display(realData[9].ac);
            }, 1000);
          }
        });
  
        aw_purifier.addEventListener("change", function () {
          if (aw_purifier.checked === true) {
            tv.checked = false;
            fridge.checked = false;
            ac.checked = false;
            wmachine.checked = false;
            setTimeout(function () {
              display(realData[7].airpurifier);
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
      i.style.width = "90%";
      let t = document.createElement("h3");
      t.innerText = e.title;
      let p = document.createElement("p");
      p.innerText = e.price + "/";
      p.style.display = "inline";
  
      div.append(i, t, p, span, btn_div);
  
      cont.append(div);
    });
  }
  
  // navbar started here
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