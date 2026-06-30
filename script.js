const freteOpcao = document.getElementById("freteOpcao");
const frete = document.getElementById("frete");

freteOpcao.addEventListener("change", () => {

    if (freteOpcao.value === "sim") {
        frete.style.display = "block";
    } else {
        frete.style.display = "none";
        frete.value = "";
    }

});

document.getElementById("gerar").addEventListener("click", () => {

    const empresa = document.getElementById("empresa").value.trim();
    const cliente = document.getElementById("cliente").value.trim();
    const produto = document.getElementById("produto").value.trim();
    const descricao = document.getElementById("descricao").value.trim();

    const quantidade = Number(document.getElementById("quantidade").value);
    const valor = Number(document.getElementById("valor").value);

    const valorFrete = freteOpcao.value === "sim"
        ? Number(frete.value || 0)
        : 0;

    if (!empresa || !cliente || !produto || quantidade <= 0 || valor <= 0) {
        alert("Preencha todos os campos obrigatórios.");
        return;
    }

    const subtotal = quantidade * valor;
    const total = subtotal + valorFrete;

    const hoje = new Date();

    const data =
        hoje.toLocaleDateString("pt-BR") +
        " " +
        hoje.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });

    document.getElementById("rEmpresa").textContent = empresa;
    document.getElementById("rCliente").textContent = cliente;
    document.getElementById("rData").textContent = data;

    document.getElementById("rProduto").textContent = produto;
    document.getElementById("rQtd").textContent = quantidade;

    document.getElementById("rUnit").textContent =
        "R$ " + valor.toFixed(2).replace(".", ",");

    document.getElementById("rValor").textContent =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    document.getElementById("rDescricao").textContent =
        descricao || "-";

    document.getElementById("rFrete").textContent =
        "R$ " + valorFrete.toFixed(2).replace(".", ",");

    document.getElementById("rTotal").textContent =
        "R$ " + total.toFixed(2).replace(".", ",");

    document.getElementById("nota").style.display = "block";

    document.getElementById("nota").scrollIntoView({
        behavior: "smooth"
    });

});