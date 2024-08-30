window.onload = function(e) {

    var botao = document.getElementById("botao");

    var txtnumero1 = document.getElementById("txtNumero1");

    var txtnumero2 = document.getElementById("txtNumero2");

    botao.onclick = function (e) {

        var numero1texto = txtnumero1.value;

        var numero1 = parseFloat(numero1texto);

        var numero2texto = txtnumero2.value;

        var numero2 = parseFloat(numero2texto);

        resultado(numero1, numero2);
    }

    function resultado(numero1, numero2) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/media?valor1=" + numero1 + "&valor2=" + numero2);

        xhr.send();
    }
}