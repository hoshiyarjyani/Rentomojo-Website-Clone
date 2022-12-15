let name = JSON.parse(sessionStorage.getItem("key-name"));
let display = document.getElementById("location");
display.innerHTML = `<b>WELCOME ${name}</b>`;

async function dataFetch(){
    try {
        let req_data = await fetch("./admin.json");
        if(req_data.ok===true){
        let req_data_real = await req_data.json();
        // console.log(req_data_real);
        displayCard(req_data_real);
       }
        
    } catch (error) {
        console.log("something went wrong,Server Error")
    }
}

dataFetch();

function displayCard(data){
    document.querySelector("#Data-container").innerHTML="";
    data.forEach(function(elem){
      let div = document.createElement("div");

      let imageProd = document.createElement("img");
      imageProd.setAttribute("src",elem.img);

      let title = document.createElement("p");
      title.innerText = elem.title;

      let price = document.createElement("p");
      price.innerText = elem.price;

      let rent = document.createElement("p");
      rent.innerText = elem.rent;

      let features = document.createElement("p");
      features.innerText = elem.features;

      let btn_add = document.createElement("button");
      btn_add.innerText = "Add this Item to Product Page";
      btn_add.addEventListener("click",function(){
        alert("Product is added to Main Page");
      })

      let btn_del = document.createElement("button");
      btn_del.innerText = "Delete this Item from Product Page"

      div.append(imageProd,title,price,rent,features,btn_add,btn_del);

      document.querySelector("#Data-container").append(div);
    })
  }


