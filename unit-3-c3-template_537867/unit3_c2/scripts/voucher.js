async function fetchdata(){

  

  let url =`https://masai-vouchers-api.herokuapp.com/api/vouchers`
  try{

    let res = await fetch (url);
    let data =await res.json();
     console.log(data[0].vouchers);

     append(data[0].vouchers)
  }
  catch(err){
    console.log(err)
  }

}

fetchdata ();


function append (data){

  console.log(data)
  
  data.map (function(elem){
  
  
    let div = document.createElement("div");
  
    let image = document.createElement("img");
    image.src=elem.image;
  
    let name =document.createElement("p");
    name.innerText=elem.name;
  
    let price =document.createElement("p");
    price.innerText=elem.price;
  
  
    let add =document.createElement("button");
    add.setAttribute("id","buy_voucher");
    add.innerText ="Buy";
  
    add.addEventListener("click",function(){
      cart(elem);
    })
  
    div.append(image,name,price,add);
  
    document.querySelector("#voucher_list").append(div);

let arr=[]
  
      var obj ={
    
        
        name :elem.name,
        image :elem.image,
        price:elem.price,
      }
    
    
      arr.push(obj)
     console.log(arr);
    
     localStorage.setItem("purchase",JSON.stringify(arr));
 
    
  })
  
  }