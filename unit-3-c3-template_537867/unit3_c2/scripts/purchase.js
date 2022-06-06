


var data= JSON.parse(localStorage.getItem("purchase"));

 
data.map (function(elem){
  
  
  let div = document.createElement("div");

  let image = document.createElement("img");
  image.src=elem.image;

  let name =document.createElement("p");
  name.innerText=elem.name;

  let price =document.createElement("p");
  price.innerText=elem.price;



  div.append(image,name,price);

  document.querySelector("#purchased_vouchers").append(div);
}