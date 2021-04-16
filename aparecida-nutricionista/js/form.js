var botaoadd = document.querySelector("#adicionar-paciente")
botaoadd.addEventListener("click",function(){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var pacient =  GetPacientForm(form);

    var erros = ValidePacient(pacient);

    if(erros.length > 0){
        exibirmsgerro(erros)
        return;
    }

    addPacientTable(pacient);

    form.reset();
    var error = document.querySelector("#msg-error");
    error.innerHTML = "";
});

function addPacientTable(pacient){
    var pacientTr = montaTr(pacient);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};

function GetPacientForm(form){

    var pacient = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return pacient;
}

function montaTr(pacient){
    pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(pacient.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(pacient.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(pacient.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(pacient.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(pacient.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
} 

function ValidePacient(pacient){

    var erros = [];
    if (pacient.nome.length == 0) erros.push("Nome é inválido")
    if (pacient.peso.length == 0 || !validpeso(pacient.peso)) erros.push("Peso é inválida");
    if (pacient.altura.length == 0 || !validaltura(pacient.altura)) erros.push("Altura é inválida");
    if (pacient.gordura.length == 0) erros.push("Gordura é inválida");

    return erros;

}

function exibirmsgerro(erros){
    var ul = document.querySelector("#msg-error");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}
