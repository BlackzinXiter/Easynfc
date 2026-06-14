const contadores =
document.querySelectorAll(".contador");


contadores.forEach(contador=>{


let numero = 0;


const atualizar = ()=>{


let alvo =
+contador.dataset.num;


let aumento =
alvo / 80;


if(numero < alvo){


numero += aumento;


contador.innerText =
Math.floor(numero);


setTimeout(
atualizar,
30
);


}

else{


contador.innerText = alvo;


}


}


atualizar();


});