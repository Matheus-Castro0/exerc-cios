window.onload = function (e) {

    var botao = document.getElementById("botao");

    var txtPreco = document.getElementById("txtPreco");

    var txtUnidades = document.getElementById("txtUnidades");

    var txtDinheiro = document.getElementById("txtDinheiro");

    botao.onclick = function (e) {

        precoTexto = txtPreco.value;

        preco = parseFloat(precoTexto);

        unidadesTexto = txtUnidades.value;

        unidades = parseInt(unidadesTexto);

        dinheiroTexto = txtDinheiro.value;

        dinheiro = parseFloat(dinheiroTexto);

        resultado(preco, unidades, dinheiro);
    }

    function resultado(preco, unidades, dinheiro) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/troco?valorProduto=" + preco + "&quantidadeProduto=" + unidades + "&dinheiroEntregue=" + dinheiro);

        xhr.send();
    }
}