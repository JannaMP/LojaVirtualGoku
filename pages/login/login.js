function local(){

  if (localStorage.getItem('usersHere') === null) {
      const ds = [ 
          { id: 1, login: "Alice", password: "1234", email: "alice@gmail.com"},//[0]
          { id: 2, login: "Gustavo", password: "12345@", email: "gustavo@gmail.com"},//[1]
          { id: 3, login: "Janaina", password: "123456@", email: "janaina@gmail.com"},//[2]
          { id: 4, login: "snoopy", password: "1950", email: "snoopy@gmail.com"}
       ]
      let n = JSON.stringify(ds);
      localStorage.setItem("usersHere", n);   
      return ds  
  } 

}

function doLogin(event){
  event.preventDefault();

  const usuarios = JSON.parse(localStorage.getItem("user"))
  
  let log = document.querySelector("#email").value
  let senha = document.querySelector('#password').value

      for(let i = 0; i < usuarios.length; i++){
          if((log == usuarios[i].email) && senha == usuarios[i].password){
              let n = JSON.stringify(usuarios[i]);
              sessionStorage.setItem("user", n)
              window.location.href =  window.location.href.replace("/pages/login/login.html","") + "/index.html"
              break
          }
}       
}

function cadastrar(event) {
  event.preventDefault();

  var usuarios = JSON.parse(localStorage.getItem("usersHere"))
  let nome = document.querySelector("#nome1").value
  let senha = document.querySelector("#password1").value
  let email = document.querySelector("#email1").value

  if (nome !== '' && senha !== '' && email !== ''){
      let user = { id: Date.now(), login: nome, password: senha, email:email}
      usuarios.push(user)
      localStorage.setItem("user", JSON.stringify(usuarios))
      alert('Conta Registrada!')
      window.location.href =  window.location.href.replace("/pages/login/login.html")
  
  }

}

function logout(){
  sessionStorage.removeItem("user")
  window.location.href =  window.location.href.replace("/pages/perfil-paciente.html","")

}

function setUserType(val){
  n = JSON.stringify(val);
  sessionStorage.setItem("userType", n)

}

