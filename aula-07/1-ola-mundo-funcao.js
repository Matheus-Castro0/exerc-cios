window.onload = function (e) {

    var botao1 = document.getElementById("botao1");

    botao1.onclick = function (e) {

        var mensagem = "Olá Mundo"

        exibirMensagem(mensagem);
    };

    function exibirMensagem(mensagem) {

        alert(mensagem);
    }
}