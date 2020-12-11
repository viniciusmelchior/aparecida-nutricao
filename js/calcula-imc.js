//calculo do IMC

var titulo = document.querySelector(".titulo"); //pega o titulo
titulo.textContent = "Aparecida Nutricionista"; //modifica o nome do titulo

var pacientes = document.querySelectorAll(".paciente")//retorna um array com classes .paciente

for(var i = 0; i < pacientes.length; i++){
   
    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        pesoEhValido = false
        tdImc.textContent = "Peso inválido"
        paciente.classList.add("paciente-invalido") //com classe no css
    }

    if(!alturaEhValida){
        alturaEhValida = false
        tdImc.textContent = "Altura inválida"
        paciente.style.backgroundColor = "lightcoral" //manipulando diretamente no javascript
    }

    if(pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc 
    } 
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000){
        return true
    } else {
        return false
    }
}

function validaAltura(altura) {
    if (altura >=0 && altura <= 3.00) {
        return true
    } else {
        return false
    }
}


function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}









