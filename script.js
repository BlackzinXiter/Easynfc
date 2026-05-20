async function verificarKey(){

let key = document.getElementById("keyInput").value

let response = await fetch("keys.json")
let data = await response.json()

let user = data.users.find(u => u.key === key)

if(user){

document.getElementById("status").innerHTML="KEY ATIVADA"

document.getElementById("nomeUser").innerHTML="👤 "+user.name
document.getElementById("diasRestantes").innerHTML="⏳ "+user.days+" dias"

document.querySelector(".login").style.display="none"
document.getElementById("perfilBanner").style.display="block"

}else{

document.getElementById("status").innerHTML="KEY INVÁLIDA"

}

}