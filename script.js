document.getElementById("botaoenviar").addEventListener("click",validaFormulario)

function validaFormulario (){
  if(document.getElementById ("nome").value != "" && document.getElementById ("email").value != "") {
 alert("Prontinho! Você receberá as novidades por email.")
  }else{
  alert("Oie, não esquece de preencher os campos nome e e-mail")
 }
}


