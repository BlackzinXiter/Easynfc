import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const lista = document.getElementById("listaPedidos");

async function carregarPedidos(){

  lista.innerHTML = "";

  const querySnapshot = await getDocs(
    collection(db, "pedidos")
  );

  querySnapshot.forEach((doc) => {

    const pedido = doc.data();

    lista.innerHTML += `

      <div class="pedido">

        <h2>${pedido.produto}</h2>

        <p><strong>Nome:</strong> ${pedido.nome}</p>

        <p><strong>UID:</strong> ${pedido.uid}</p>

        <p><strong>Email:</strong> ${pedido.email}</p>

        <p><strong>Valor:</strong> R$ ${pedido.valor}</p>

        <p><strong>Status:</strong> ${pedido.status}</p>

        <p><strong>Data:</strong> ${pedido.data}</p>

      </div>

    `;

  });

}

carregarPedidos();