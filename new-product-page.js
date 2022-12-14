// particular item page for details rendring by Jyani


let image_displaying_container = document.getElementById(
    "image-displaying-container"
  );
  let productArr = JSON.parse(localStorage.getItem("products")) || [];
  let cartArr = JSON.parse(localStorage.getItem("cartpage")) || [];
  
  let rent_container = document.getElementById("rent-container");
  
  let displaying_container = document.getElementById("displaying-container");
  
  let ele = productArr;
  
  function ImageDisplay(ele) {
    console.log(2);
    let div = document.createElement("div");
  
    let img = document.createElement("img");
    img.src = ele.img;
  
    div.append(img);
    image_displaying_container.append(div);
  }
  
  ImageDisplay(ele);
  
  //Product Display Menu Page
  //  let productArr=JSON.parse(localStorage.getItem("products"))||[];
  
  function productDisplay() {
    let el = productArr;
    displaying_container.innerHTML = "";
  
    let div = document.createElement("div");
    div.style.textAlign = "center";
  
    let img = document.createElement("img");
    img.src = el.img;
  
    let name = document.createElement("h1");
    name.innerText = el.title;
  
    let rent = document.createElement("h3");
    rent.innerText = el.rent;
  
    let desc = document.createElement("p");
    desc.innerText = el.desc;
  
    let size = document.createElement("h4");
    size.innerText = el.size;
  
    let features = document.createElement("h4");
    features.innerText = el.features;
  
    div.append(img, name, rent, desc, size, features);
  
    displaying_container.append(div);
  }
  
  function rentDisplay() {
    displaying_container.innerHTML = "";
  
    let div1 = document.createElement("div");
    div1.style.display = "flex";
  
    let innerDiv1 = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = "Relocate for free when you move";
  
    let h3 = document.createElement("p");
    h3.innerText =
      "Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our 8 operational cities!";
  
    innerDiv1.append(h2, h3);
  
    let innerDiv2 = document.createElement("div");
    innerDiv2.style.width = "50%";
    let img = document.createElement("img");
    img.style.width = "100%";
    img.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/product.png";
    innerDiv2.append(img);
  
    div1.append(innerDiv1, innerDiv2);
  
    //Bottom div- 5child div Jyani
  
    let div2 = document.createElement("div");
    div2.style.margin = "auto";
  
    let innerDiv3 = document.createElement("div");
    innerDiv3.style.display = "flex";
    innerDiv3.style.justifyContent = "space-around";
    let innermostDiv3 = document.createElement("div");
    innermostDiv3.style.width = "60%";
    let img3 = document.createElement("img");
    img3.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.svg";
    img3.style.height = "40px";
    let text3 = document.createElement("h3");
    text3.innerText = "Relocate for free when you move";
    let p3 = document.createElement("p");
    p3.innerText =
      "Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our eight operational cities!";
    innermostDiv3.append(text3, p3);
    innerDiv3.append(img3, innermostDiv3);
  
    let innerDiv4 = document.createElement("div");
    innerDiv4.style.display = "flex";
    innerDiv4.style.justifyContent = "space-around";
    let innermostDiv4 = document.createElement("div");
    innermostDiv4.style.width = "60%";
    let img4 = document.createElement("img");
    img4.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/1.png";
    img4.style.height = "40px";
  
    let text4 = document.createElement("h3");
    text4.innerText = "Furniture as good as new";
    let p4 = document.createElement("p");
    p4.innerText =
      "Quality matters to you, and us! That's why our team does a thorough quality-check for every product, so it reaches you in a condition as good as new.";
    innermostDiv4.append(text4, p4);
    innerDiv4.append(img4, innermostDiv4);
  
    let innerDiv5 = document.createElement("div");
    innerDiv5.style.display = "flex";
    innerDiv5.style.justifyContent = "space-around";
    let innermostDiv5 = document.createElement("div");
    innermostDiv5.style.width = "60%";
    let img5 = document.createElement("img");
    img5.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png";
    img5.style.height = "40px";
  
    let text5 = document.createElement("h3");
    text5.innerText = "Easy returns, no questions asked";
    let p5 = document.createElement("p");
    p5.innerText =
      "If you don't like the product you receive on delivery, you can return it right away. We'll initiate the refund of your deposit within 24 hours.";
    innermostDiv5.append(text5, p5);
    innerDiv5.append(img5, innermostDiv5);
  
    let innerDiv6 = document.createElement("div");
    innerDiv6.style.display = "flex";
    innerDiv6.style.justifyContent = "space-around";
    let innermostDiv6 = document.createElement("div");
    innermostDiv6.style.width = "60%";
    let img6 = document.createElement("img");
    img6.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png";
    img6.style.height = "40px";
  
    let text6 = document.createElement("h3");
    text6.innerText = "Free maintenance and annual cleaning";
    let p6 = document.createElement("p");
    p6.innerText =
      "We offer maintenance for your product after 12 months and annual cleaning—free of cost, so you can sit back and relax.";
    innermostDiv6.append(text6, p6);
    innerDiv6.append(img6, innermostDiv6);
  
    let innerDiv7 = document.createElement("div");
    innerDiv7.style.display = "flex";
    innerDiv7.style.justifyContent = "space-around";
    let innermostDiv7 = document.createElement("div");
    innermostDiv7.style.width = "60%";
    let img7 = document.createElement("img");
    img7.src =
      "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png";
    img7.style.height = "40px";
    let text7 = document.createElement("h3");
    text7.innerText = "Keep upgrading to newer designs";
    let p7 = document.createElement("p");
    p7.innerText =
      "Bored of the same product and style? Just upgrade after 12 months to try another design and enjoy the change!";
    innermostDiv7.append(text7, p7);
    innerDiv7.append(img7, innermostDiv7);
  
    div2.append(innerDiv3, innerDiv4, innerDiv5, innerDiv6, innerDiv7);
  
    displaying_container.append(div1, div2);
  }
  
  productDisplay();
  
  //book your plan
  
  //let productArr=JSON.parse(localStorage.getItem("products"))||[];
  
  //  let ele=productArr[productArr.length-1];
  
  let months = 12;
  
  Display(ele, months);
  
  function Months() {
    let months = document.getElementById("months").value;
    Display(ele, months);
  }
  
  function Display(ele, months) {
    rent_container.innerHTML = "";
  
    let div = document.createElement("div");
  
    let name = document.createElement("h2");
    name.innerText = ele.title;
  
    let para = document.createElement("p");
    para.innerText = "How long do you want to rent this for? (Months)";
  
    let price = +ele.price;
    let monthly_rent;
  
    console.log(price);
  
    if (months == 12) {
      monthly_rent = price * 1;
    } else if (months == 9) {
      monthly_rent = price * 1.2;
    } else if (months == 6) {
      monthly_rent = price * 1.3;
    } else if (months == 3) {
      monthly_rent = price * 1.4;
    }
  
    monthly_rent = Math.round(monthly_rent);
  
    console.log(ele);
    let Display_rent = document.createElement("div");
    Display_rent.innerText = "Monthly Rent = ₹" + monthly_rent;
    Display_rent.id = "Display-rent";
  
    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.id = "CartButton";
    btn.addEventListener("click", function () {
      // console.log(ele);
  
      cartArr.push(ele);
      localStorage.setItem("cartpage", JSON.stringify(cartArr));
      alert("Congratulations!! Added to cart");
    });
  
    div.append(name, para, Display_rent, btn);
  
    rent_container.append(div);
  }
  
  // nav started
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
  
  // let cartArr=JSON.parse(localStorage.getItem("cartpage")) || [];
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
  