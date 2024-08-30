window.onload = function (e) {

    var botao = document.getElementById("botao");

    botao.onclick = function (e) {

        olaMundo();
    }

    function olaMundo() {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/olaMundo");

        xhr.send();
    }
}