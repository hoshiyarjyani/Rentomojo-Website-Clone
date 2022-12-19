

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
    function DisplayCard(data){
        card.innerHTML=null

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

        let brand_id = document.createElement("p")
        brand_id.innerHTML = `<b>Brand-id ${elem.brand_id}</b>`



        let btn_edit = document.createElement("button");
        btn_edit.innerText = "Edit";
        btn_edit.setAttribute("id", "edit_btn")

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("id","RemoveButton");

        btn.addEventListener("click",function(){
            deldata(data,elem)
           })

           btn_edit.addEventListener("click", function () {

            btn_edit.innerText = ""
            let anchor = document.createElement("a")
            anchor.setAttribute("id", "acnchor_update")
            let textNode = document.createTextNode("Want Update?")
            anchor.appendChild(textNode)
            anchor.href = "update.html";
            btn_edit.appendChild(anchor);

            let y = JSON.parse(localStorage.getItem("new"))
            console.log(y)

            // document.button1.appendChild(anchor);
        })

        new_div.append(image,title,price,rent,features,brand_id,btn,btn_edit);
        card.append(new_div);
    })
};


function deldata(data,index){
    alert("product has been removed")
    data.splice(index,1)
    localStorage.setItem("add_data",JSON.stringify(data))
    DisplayCard(adminarr);
    
  }

DisplayCard(adminarr);

// DisplayCard(adminarr);

// function DeleteCard(pid){
//   let card = JSON.parse(localStorage.getItem("add_data"));
//   let newcard = card.filter((item)=> item.title != pid);

//   localStorage.setItem("add_data",JSON.stringify(newcard));
// }

// document.querySelector("#RemoveButton").addEventListener("click",function(){
//     alert("Product Is Removed From Website");
//     for(let i=0;i<adminarr.length;i++){
//         DisplayCard(DeleteCard(adminarr[i].title));
//     }
//     window.location.href = "./admin_view_product.html";
// })




