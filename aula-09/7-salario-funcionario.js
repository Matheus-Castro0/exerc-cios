window.onload = function (e) {

    var botao = document.getElementById("botao");

    var txtFuncionario = document.getElementById("txtFuncionario");

    var txtValorHora = document.getElementById("txtValorHora");

    var txtHorasTrabalhadas = document.getElementById("txtHorasTrabalhadas");

    botao.onclick = function (e) {

        funcionario = txtFuncionario.value;

        valorHoraTexto = txtValorHora.value;

        valorHora = parseFloat(valorHoraTexto);

        horasTrabalhadasTexto = txtHorasTrabalhadas.value;

        horasTrabalhadas = parseInt(horasTrabalhadasTexto);

        resultado(funcionario, valorHora, horasTrabalhadas);
    }

    function resultado(funcionario, valorHora, horasTrabalhadas) {

        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                alert(this.responseText);
            }
        });

        xhr.open("GET", "https://localhost:44379/api/aula8/salario?nomeFuncionario=" + funcionario + "&valorHora=" + valorHora + "&horasTrabalhadas=" + horasTrabalhadas);

        xhr.send();
    }
}