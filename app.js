import {
  db,
  collection,
  addDoc
} from "./firebase.js";

let produtoSelecionado = "";
let valorSelecionado = 0;

const modal = document.getElementById("modal");

window.selecionarProduto = function(produto, valor){

  produtoSelecionado = produto;
  valorSelecionado = valor;

  modal.style.display = "flex";
};

window.criarPedido = async function(){

  alert("BOTÃO CLICADO");

  try {

    await addDoc(collection(db, "pedidos"), {

      produto: produtoSelecionado,
      valor: valorSelecionado,
      status: "aguardando",
      data: new Date().toLocaleString("pt-BR")

    });

    alert("SALVOU NO FIREBASE");

  } catch (erro) {

    console.error(erro);

    alert("ERRO FIREBASE");

  }

};

modal.addEventListener("click", function(event){

  if(event.target === modal){

    modal.style.display = "none";

  }

});