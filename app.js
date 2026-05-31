import {
  db,
  collection,
  addDoc
} from "./firebase.js";

alert("APP CARREGOU");

const modal = document.getElementById("modal");

alert("MODAL: " + modal);

window.selecionarProduto = function(produto, valor){

  alert("PRODUTO: " + produto);

  if(modal){
    modal.style.display = "flex";
  }

};

window.criarPedido = async function(){

  alert("BOTÃO CLICADO");

};

if(modal){

  modal.addEventListener("click", function(event){

    if(event.target === modal){

      modal.style.display = "none";

    }

  });

}