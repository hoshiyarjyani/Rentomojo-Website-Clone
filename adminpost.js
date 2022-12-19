let name = JSON.parse(sessionStorage.getItem("key-name"));
name=name.toUpperCase()
let display = document.getElementById("location");
display.innerHTML = `<b>WELCOME ${name}</b>`;

let adminarr=JSON.parse(localStorage.getItem("add_data"))||[];

document.querySelector("#publishdata").addEventListener("click",function(){
  let img = document.querySelector("#productimage").value;
  let title = document.querySelector("#producttitle").value;
  let price = document.querySelector("#productprice").value;
  let rent = document.querySelector("#producrent").value;
  let features = document.querySelector("#productfeatures").value;
  let brand_id = document.querySelector("#brand").value;

  let admin_object = {"image":img,"title":title,"price":price,"rent":rent,"product-features":features,"brand_id":brand_id};

  adminarr.push(admin_object);

  localStorage.setItem("add_data",JSON.stringify(adminarr));
  alert("Product is added to the main page");

});

document.querySelector("#seedata").addEventListener("click",function(){
  window.location.href = "admin_view_product.html";
})


