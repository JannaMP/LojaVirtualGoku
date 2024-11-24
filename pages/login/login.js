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

  const usuarios = JSON.parse(localStorage.getItem("usersHere"))
  
  let log = document.querySelector("#email").value
  let senha = document.querySelector('#password').value

      for(let i = 0; i < usuarios.length; i++){
          if((log == usuarios[i].email) && senha == usuarios[i].password){
              let n = JSON.stringify(usuarios[i]);
              sessionStorage.setItem("usersHere", n)
              alert(`${usuarios[i].login} logou`)
              window.location.href = ('/')
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
      localStorage.setItem("usersHere", JSON.stringify(usuarios))
      alert('Conta Registrada!')
      window.location.href = ("/pages/login/login.html")
  
  }

}

function logout() {
  sessionStorage.removeItem("usersHere");  // Remove as informações do usuário do sessionStorage
  window.location.href = ("/")  // Redireciona para a página inicial ou outra desejada
}

function setUserType(val){
  n = JSON.stringify(val);
  sessionStorage.setItem("userType", n)

}
function esconderLinksDeLogin() {
  // Verifica se o usuário está logado, ou seja, se o item 'userHere' existe no sessionStorage
  const user = sessionStorage.getItem('usersHere');

  // Se o usuário estiver logado (se 'userHere' existir no sessionStorage)
  if (user) {
    const loginLink = document.getElementById('homeLink');  // Encontra o link de 'Home'
    const logoutItem = document.getElementById('logoutItem');

    // Verifica se o link 'Home' realmente existe na página antes de tentar escondê-lo
    if (loginLink) {
      loginLink.style.display = 'none';  // Esconde o link de 'Home'
    }
    if(logoutItem){
      logoutItem.style.display = 'block';
    }
  }else {
    if (loginLink) {
      loginLink.style.display = 'block';  // Garante que o link de 'Login' seja visível se não estiver logado
    }

    if (logoutItem) {
      logoutItem.style.display = 'none';  // Garante que o botão de 'Logout' seja oculto se não estiver logado
    }
  }
}