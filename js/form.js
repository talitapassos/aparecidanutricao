var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form);

    var pacienteTr = montaTr(paciente);
    pacienteTr.classList.add("paciente");


    var tabela = document.querySelector("#tabela-pacientes");


    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(MontaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));

    return pacienteTr
}

function MontaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}