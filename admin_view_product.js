

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

    function  goToHome(){
        window.location.href="index.html";
    }

    let adminarr = JSON.parse(localStorage.getItem("add_data")) || [];
    console.log(adminarr);

    let card = document.querySelector("#cardcontainer");
    function DisplayCard(data,box){
    data.filter((elem)=>{
        let new_div = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.image;

        let title =  document.createElement("p");
        title.innerHTML = `<b>${elem.title}</b>`

        let price = document.createElement("p");
        price.innerHTML = `<b>Price - ₹${elem.price}`;

        let rent = document.createElement("p");
        rent.innerHTML = `<b>Rent Amount - ₹${elem.rent}/month</b>`;

        let features = document.createElement("p");
        features.innerHTML = `<b>Brand New Condition(Scratchless)</b>`;

        let btn = document.createElement("button");
        btn.innerText = "Remove";

        new_div.append(image,title,price,rent,features,btn);
        box.append(new_div);
    })
    }

DisplayCard(adminarr,card);



