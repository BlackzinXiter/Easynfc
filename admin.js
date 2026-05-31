import { db } from “./firebase.js”;

import {
collection,
getDocs,
doc,
updateDoc,
deleteDoc
} from “https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js”;

const lista = document.getElementById(“listaPedidos”);

window.alterarStatus = async function(id, status){

await updateDoc(
doc(db, “pedidos”, id),
{
status: status
}
);

carregarPedidos();
};

window.excluirPedido = async function(id){

const confirmar = confirm(
“Deseja excluir este pedido?”
);

if(!confirmar) return;

await deleteDoc(
doc(db, “pedidos”, id)
);

carregarPedidos();
};

async function carregarPedidos(){

lista.innerHTML = “”;

const querySnapshot = await getDocs(
collection(db, “pedidos”)
);

const uidBusca =
document.getElementById(“buscarUid”)?.value?.toLowerCase() || “”;

const statusFiltro =
document.getElementById(“filtroStatus”)?.value || “todos”;

let totalPedidos = 0;
let totalVendas = 0;
let aguardando = 0;
let entregues = 0;

const pedidosFiltrados = [];

querySnapshot.forEach((documento) => {

const pedido = documento.data();
totalPedidos++;
totalVendas += Number(pedido.valor || 0);
if(pedido.status === "aguardando"){
  aguardando++;
}
if(pedido.status === "entregue"){
  entregues++;
}
const passouUID =
  !uidBusca ||
  String(pedido.uid || "")
  .toLowerCase()
  .includes(uidBusca);
const passouStatus =
  statusFiltro === "todos" ||
  pedido.status === statusFiltro;
if(passouUID && passouStatus){
  pedidosFiltrados.push({
    id: documento.id,
    ...pedido
  });
}

});

lista.innerHTML += `

<div class="pedido">
  <h2>📊 Resumo</h2>
  <p><strong>Pedidos:</strong> ${totalPedidos}</p>
  <p><strong>Total vendido:</strong> R$ ${totalVendas.toFixed(2)}</p>
  <p><strong>Aguardando:</strong> ${aguardando}</p>
  <p><strong>Entregues:</strong> ${entregues}</p>
</div>

`;

pedidosFiltrados.forEach((pedido) => {

lista.innerHTML += `
  <div class="pedido">
    <h2>${pedido.produto}</h2>
    <p><strong>Nome:</strong> ${pedido.nome}</p>
    <p><strong>UID:</strong> ${pedido.uid}</p>
    <p><strong>Email:</strong> ${pedido.email}</p>
    <p><strong>Valor:</strong> R$ ${pedido.valor}</p>
    <p><strong>Status:</strong> ${pedido.status}</p>
    <p><strong>Data:</strong> ${pedido.data}</p>
    <button onclick="alterarStatus('${pedido.id}','aguardando')">
      ⏳ Aguardando
    </button>
    <button onclick="alterarStatus('${pedido.id}','entregue')">
      ✅ Entregue
    </button>
    <button onclick="alterarStatus('${pedido.id}','cancelado')">
      ❌ Cancelado
    </button>
    <button onclick="alterarStatus('${pedido.id}','reembolsado')">
      💸 Reembolsado
    </button>
    <button onclick="excluirPedido('${pedido.id}')">
      🗑 Excluir
    </button>
  </div>
`;

});

}

document.addEventListener(“input”, carregarPedidos);
document.addEventListener(“change”, carregarPedidos);

carregarPedidos();