var ButtonBusca = document.querySelector("#buscar-paciente");

ButtonBusca.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacie1ntes");

    xhr.addEventListener("load", function(){
        var erro = document.querySelector("#erro-ajax")
        if( xhr.status == 200){
            var respost = xhr.responseText;
            var pacientes = JSON.parse(respost);
            pacientes.forEach(function(pacient) {
                addPacientTable(pacient);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erro.classList.remove("fadeOut2");
            erro.classList.add("msg-error");
            
            setTimeout(function(){
                erro.classList.add("fadeOut");

                setTimeout(function(){
                    erro.classList.add("fadeOut2");
                }, 250);

            }, 5000)
        }
    });
    
    xhr.send();
    // http://api-pacientes.herokuapp.com/pacientes
});