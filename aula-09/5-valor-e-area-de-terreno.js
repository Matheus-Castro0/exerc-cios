window.onload = function (e) {

    var botao = document.getElementById("botao");

    var txtComprimento = document.getElementById("txtComprimento");

    var txtLargura = document.getElementById("txtLargura");

    var txtValorM = document.getElementById("txtValorM");

    botao.onclick = function (e) {

        comprimentoTexto = txtComprimento.value;

        comprimento = parseFloat(comprimentoTexto);

        larguraTexto = txtLargura.value;

        largura = parseFloat(larguraTexto);

        valorMTexto = txtValorM.value;

        valorM = parseFloat(valorMTexto);

        resultado(comprimento, largura, valorM)
    }

    function resultado(comprimento, largura, valorTerreno) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/valorTerreno?largura=" + largura + "&comprimento=" + comprimento + "&valorM=" + valorM);

        xhr.send();
    }
}