function local(){
    let dados = [ { "id":1,"nome":"Alice","senha":123,"numero":11, "email": "alice123@gmail.com"}, 
                  { "id":2,"nome":"Gustavo","senha":777,"numero":11, "email": "gustavo123@gmail.com"}, 
                  { "id":3,"nome":"Janaina","senha":333, "numero":11, "email": "janaina@gmail.com"} 
                ]       
    let n = JSON.stringify(dados);
    localStorage.setItem("tds", n);   
    return dados 
  
}

function logon(){  
  const dados = JSON.parse(localStorage.getItem("tds"))
  let login = document.querySelector("#email").value
  let senha = document.querySelector("#senha").value

for (let i = 0; dados.length > i; i++) {
  if (dados[i] == null) {
     alert("Verificando")
    //  alert("encontrou: " + dados[i].nome + ":" + i)
  } else {
    if (login == dados[i].email && senha == dados[i].senha) {
      console.log("conectado")
      let n = JSON.stringify(dados[i]);
      sessionStorage.setItem("user", n)
      window.location.href= "index.html"
      break
      
    }
  }
 }
} 
//SessionStore getItem
function logado(){
  let dados = JSON.parse(sessionStorage.getItem("user"))

  if (dados !== null){
    document.getElementById("nome").innerHTML = "Bem vindo " + dados.nome + " !"
  }

}
//SessionStore remove Item
function logaout(){
  sessionStorage.removeItem("user")
  let url = "index.html"
  window.open(url)
  window.close()    
}



function adicionar() {
  var ClienteArray = JSON.parse(localStorage.getItem("tds"))
  let nome = document.querySelector("#nome").value
  let email = document.querySelector("#email").value
  let senha = document.querySelector("#senha").value
  let numero = document.querySelector("#numero").value
  let user = { id: Date.now(), nome: nome, email: email, senha: senha, numero: numero}
  ClienteArray.push(user)
  localStorage.setItem("tds", JSON.stringify(ClienteArray))
  sessionStorage.setItem("user", n)
  alert("Registro adicionado.")
  document.querySelector("#email").value = ""
  document.querySelector("#senha").value = ""
  document.querySelector("#nome").value = ""
  document.querySelector("#numero").value = ""
  

}

 function buscar() {
   var dados = JSON.parse(localStorage.getItem("tds"))
   let email = document.querySelector("#email").value

   for (let i = 0; dados.length > i; i++) {
     if (dados[i] == null && dados[i] != email) {
       alert("Verificando")
     } else { 
       if (email == dados[i].nome) {
       //alert("encontrou: " + dados[i].nome + ":" + i)
       document.querySelector("#id").value = dados[i].id
       document.querySelector("#email").value = dados[i].email
       document.querySelector("#senha").value = dados[i].senha    
       break
     } 
   }
 }
}

 function tabela(){
  var dados = JSON.parse(localStorage.getItem("tds"))
  for (let i = 0; dados.length > i; i++) {
  document.querySelector("#cod").innerHTML = dados[i].id
  document.querySelector("#usuario").innerHTML = dados[i].nome
  document.querySelector("#pass").innerHTML = dados[i].senha  
  } 
 }
     
function atualizar() {
  var dados = JSON.parse(localStorage.getItem("tds"))
  localStorage.removeItem("tds")
  let id = document.querySelector("#id").value
  let email = document.querySelector("#email").value
  let senha = document.querySelector("#senha").value  

  for (let i = 0; dados.length > i; i++) {
  if (id == dados[i].id){
    let user = { id: id, nome: email, senha: senha }
    dados[i] = user
    localStorage.setItem("tds", JSON.stringify(dados))
    alert("Atualizado!")
    break
  } 
 }
}

 function apagarItemVetor() {
   let id = parseInt(document.querySelector("#id").value)
   let email = document.querySelector("#email").value
   var dados = JSON.parse(localStorage.getItem("tds"))
   localStorage.removeItem("tds")
   
  for (let i = 0; dados.length > i; i++) {
     if (dados[i] == null) {
        alert("Verificando")       
     } else { 
       if (id == dados[i].id && email == dados[i].nome) {
       delete dados[i]
       break;
     } 
    }
   }   
   localStorage.setItem("tds", JSON.stringify(dados))
 }

function apagaTudo(){
  localStorage.removeItem("tds")
}

function limpar(){
  document.querySelector("#id").value = ""
  document.querySelector("#email").value = ""
  document.querySelector("#senha").value = "" 
}

/*
function removerItem() {
  var meuJSON = JSON.parse(localStorage.getItem("tds"))
  let valor = parseInt(document.querySelector("nome").value)

  chave = "nome"

  meuJSON = meuJSON.filter(function (jsonObject) {
    return jsonObject[chave] != valor
  });
  return meuJSON
}
*/



