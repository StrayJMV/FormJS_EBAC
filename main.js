const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const valorA = Number(document.getElementById("campoA").value);
    const valorB = Number(document.getElementById("campoB").value);

    const campoA = document.getElementById("campoA");
    const campoB = document.getElementById("campoB");

    const Sucesso = `Parabéns o valor do Campo B: <b>${valorB}</b> é maior que o valor do Campo A: <b>${valorA}</b>`;
    const Erro = `Tente Novamente! O valor do campo B: <b>${valorB}</b> é menor que o valor do Campo A: <b>${valorA}</b>`;

    let calculo = false;

    function vValor(valorA, valorB) {
        return valorA < valorB;
    }

    const resultadoCerto = document.querySelector(".resultado_certo");
    const resultadoErrado = document.querySelector(".resultado_erro");

    calculo = vValor(valorA, valorB);

    if (calculo) {
        resultadoCerto.innerHTML = Sucesso;
        resultadoCerto.style.display = "block";
        resultadoErrado.style.display = "none";

        campoA.style.border = "";
        resultadoErrado.innerHTML = "";

        campoA.value = "";
        campoB.value = "";
    } else {
        campoA.style.border = "1px solid red";
        resultadoErrado.innerHTML = Erro;
        resultadoErrado.style.display = "block";
        resultadoCerto.style.display = "none";

        campoB.value = "";
    }
});