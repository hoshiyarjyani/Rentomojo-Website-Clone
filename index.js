

    let onSlide = false;

    window.addEventListener("load", () => {
        autoSlide();

        let dots = document.querySelectorAll(".banner_dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].addEventListener("click", () => slide(i));
        }

        let btnPrev = document.querySelector(".banner_button__prev");
        let btnNext = document.querySelector(".banner_button__next");
        btnPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
        btnNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));

    })

    function autoSlide() {
        setInterval(() => {
            slide(getItemActiveIndex() + 1);
        }, 3000);
    }

    function slide(toIndex) {
        if (onSlide)
            return;
        onSlide = true;

        let itemsArr = Array.from(document.querySelectorAll(".banner_item"));
        let itemActive = document.querySelector(".banner_item__active");
        let itemActiveIndex = itemsArr.indexOf(itemActive);
        let newItemActive = null;

        if (toIndex > itemActiveIndex) {
            // check if toIndex exceeds the number of banner items
            if (toIndex >= itemsArr.length) {
                toIndex = 0;
            }

            newItemActive = itemsArr[toIndex];

            // start transition
            newItemActive.classList.add("banner_item__pos_next");
            setTimeout(() => {
                newItemActive.classList.add("banner_item__next");
                itemActive.classList.add("banner_item__next");
            }, 20);
        } else {
            // check if toIndex exceeds the number of banner items
            if (toIndex < 0) {
                toIndex = itemsArr.length - 1;
            }

            newItemActive = itemsArr[toIndex];

            // start transition
            newItemActive.classList.add("banner_item__pos_prev");
            setTimeout(() => {
                newItemActive.classList.add("banner_item__prev");
                itemActive.classList.add("banner_item__prev");
            }, 20);
        }

        // remove all transition class and switch active class
        newItemActive.addEventListener("transitionend", () => {
            itemActive.className = "banner_item";
            newItemActive.className = "banner_item banner_item__active";
            onSlide = false;
        }, {
            once: true
        });

        slideIndicator(toIndex);
    }

    function getItemActiveIndex() {
        let itemsArr = Array.from(document.querySelectorAll(".banner_item"));
        let itemActive = document.querySelector(".banner_item__active");
        let itemActiveIndex = itemsArr.indexOf(itemActive);
        return itemActiveIndex;
    }

    function slideIndicator(toIndex) {
        let dots = document.querySelectorAll(".banner_dot");
        let dotActive = document.querySelector(".banner_dot__active");
        let newDotActive = dots[toIndex];

        dotActive.classList.remove("banner_dot__active");
        newDotActive.classList.add("banner_dot__active");
    }

    // banner end here  

    let slideI = 1;
    showSlides(slideI);

    // Next/prev controls
    function plusSlides(n) {
        showSlides(slideI += n);
    }

    //  image controls
    function currentSlide(n) {
        showSlides(slideI = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides4");

        if (n > slides.length) { slideI = 1 }
        if (n < 1) { slideI = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideI - 1].style.display = "block";

    }
    //   div  end 
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
            
            })
        })
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

    // search function of navbar
    function nav_search_fn(){
        let se=document.getElementById("nav_search").value;
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

    let cartArr=JSON.parse(localStorage.getItem("cartpage")) || []; 
    function cart_clicked(){
        let login_status=JSON.parse(localStorage.getItem("loginsuccess"));
        if(login_status==true){
            window.location.href="cart.html";
        }else{
            alert("Login first!!");
        }
    }

    // login - signup function started


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
               window.location.href="index.html";
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

// div2 home 

//md ali-medium screen footer


    let acc = document.getElementsByClassName("outer");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the inner */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active inner */
            var inner = this.nextElementSibling;
            if (inner.style.display === "block") {
                inner.style.display = "none";
            } else {
                inner.style.display = "block";
            }
        });
    }

    function  goToHome(){
        window.location.href="index.html";
    }


