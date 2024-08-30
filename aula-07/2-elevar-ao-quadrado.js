window.onload = function (e) {

    var botao1 = document.getElementById("botao1");

    botao1.onclick = function (e) {

        var numero = parseInt(document.getElementById("txtNumero").value);

        var calculo = raizQuadrada(numero);

        alert (calculo);
    };

    function raizQuadrada(numero) {

        var raiz = numero * numero;

        return raiz;
    }
}