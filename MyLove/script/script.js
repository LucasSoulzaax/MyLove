const username = document.querySelector("#username")
const password = document.querySelector("#Pass")
const btn = document.querySelector("#btn")





btn.addEventListener("click", (event)=>{
    event.preventDefault();
  if(username.value.toLowerCase() === "hulk" && password.value === "16062000"){
    window.location.href = "templates/principio.html";

   
  
  }else{
    alert("Login inválido")

   
  }

}
) 

 