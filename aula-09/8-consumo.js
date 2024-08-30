window.onload = function (e) {

    botao = document.getElementById("botao");

    txtDistancia = document.getElementById("txtDistancia");

    txtCombustivel = document.getElementById("txtCombustivel");

    botao.onclick = function (e) {

        distanciaTexto = txtDistancia.value;

        combustivelTexto = txtCombustivel.value;

        distancia = parseFloat(distanciaTexto);

        combustivel = parseFloat(combustivelTexto);

        resultado(distancia, combustivel);
    }

    function resultado(distancia, combustivel) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/consumo?distanciaPercorrida=" + distancia + "&litrosGastos=" + combustivel);

        xhr.send();
    }
}