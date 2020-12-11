//var pacientes = document.querySelectorAll(".paciente")

//pacientes.forEach(function(paciente){
 //   paciente.addEventListener("dblclick", function(){
//        console.log("Fui clicado com duplo clique")
 //       this.remove()
 //   })
//})

var tabela = document.querySelector("table")

tabela.addEventListener("dblclick", function(event){
    //var alvoEvento = event.target //ponto de clique
    //var paiAlvo = alvoEvento.parentNode //TR linha que queremos apagar

    event.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)

    


})

