var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){

    var paciente = pacientes[i];
    var tdNome = paciente.querySelector(".info-nome");
    var nome = tdNome.textContent;

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");
    var imc = tdImc.textContent;

    var ValideAltura = validaltura(altura);
    var ValidePeso = validpeso(peso);

    if(!ValidePeso){
        tdPeso.textContent = "Error";
        ValidPeso = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(!ValideAltura){
        tdAltura.textContent = "Error"
        ValidAltura = false;
        paciente.classList.add("paciente-invalido2");
    }
    
    if(ValideAltura && ValidePeso){
        var calcimc = calculaImc(peso, altura)
        tdImc.textContent = calcimc;

    } else {
        tdImc.textContent = "Error"
        tdImc.classList.add("paciente-invalido");
    }
}

function validpeso(peso){
    if(peso >= 0 && peso < 101){
        return true;
    }else{
        return false;
    }
}

function validaltura(altura){
    if(altura > 0.5 && altura < 2.38){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var calcimc = 0

    calcimc = peso / (altura * altura);

    return calcimc.toFixed(3);
}