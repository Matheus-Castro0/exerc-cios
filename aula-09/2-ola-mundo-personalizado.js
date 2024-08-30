window.onload = function(e) {

    var botao = document.getElementById("botao");

    var txtNome = document.getElementById("txtNome");

    botao.onclick = function (e) {

        var nome = txtNome.value;

        olaMundoPersonalizado(nome);
    }

    function olaMundoPersonalizado(nome) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/olaMundoPersonalizado?nome=Matheus");

        xhr.send();
    }

}