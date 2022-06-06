



document.querySelector("form").addEventListener("submit",submit);

function submit(){
  event.preventDefault();

  var userobj= {
   name : document.querySelector("#name").value,
   email : document.querySelector("#email").value,

   address :document.querySelector("#address").value,
   amount :document.querySelector("#amount").value,
  
  };
localStorage.setItem("user",JSON.stringify(userobj))
  console.log(userobj)
}