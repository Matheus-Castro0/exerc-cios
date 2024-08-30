window.onload = function (e) {

    var botao = document.getElementById("botao");

    var txtEmail = document.getElementById("txtEmail");

    txtEmail.focus();

    botao.onclick = function (e) {

        e.preventDefault();

        var email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Campo E-mail obrigatório.");
        }

        else {
            mandarCodigoConfirmacao(email);
        }

    }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

    function mandarCodigoConfirmacao(email) {
        alert("O código foi enviado para o E-Mail: " + email);
    }

}