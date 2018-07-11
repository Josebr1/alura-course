var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {
    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;
    var imc = paciente[i].querySelector(".info-imc");
    
    console.log(imc);
    
    if (( peso <= 0 || peso > 1000) || (altura <= 0 || altura >= 3.00)){
        //alert("Peso ou altura inválidos");
        imc.textContent = "NaN";
        paciente[i].classList.add("paciente-invalido");
    } else {
        imc.textContent =  calculaImc(peso, altura);
    }
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
