function onClickAddPerson(){
    event.preventDefault(event);

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
   
    var line = "<tr><td>"+ paciente.nome +"</td><td>"+ paciente.peso +"</td><td>"+ paciente.altura +"</td><td>"+ paciente.gordura +"</td><td>"+ paciente.imc +"</td></tr>"
    document.getElementById("tabela-pacientes").innerHTML += line;
}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}