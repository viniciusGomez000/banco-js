var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
  
    if(this.value.length > 0 ){
        for( var i = 0; i < pacientes.length ; i++ ){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var regular = new RegExp(this.value,"i");
            if( regular.test(nome) ){
                paciente.classList.remove("fadeOut2")   
            } else {
                paciente.classList.add("fadeOut2")     
            }
        }
    } else {
        for(var i = 0; i < pacientes.length; i++){
            paciente = pacientes[i];
            paciente.classList.remove("fadeOut2")
        };
    }

});