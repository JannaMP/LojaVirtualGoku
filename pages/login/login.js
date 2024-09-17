function dados() {
    const ds = [ 
        { id: 1, password: "123", email: "abc" }, // [0]
        { id: 2, password: "1234@", email: "abcd@" }, // [1]
        { id: 3, password: "11", email: "gustavo11" }, // [2]
        { id: 4, password: "1234567@", email: "janaina@gmail.com" }, // [3]
    ];
    return ds;
}

const usuarios = dados();

function login() {
    let log = document.querySelector('#email3').value;
    let senha = document.querySelector('#password3').value;
        for (let i = 0; i < usuarios.length; i++) {
        if (log === usuarios[i].email && senha === usuarios[i].password) {
            window.location.href = "/index.html";
            usuarioEncontrado = true; // Usuário encontrado, não precisa continuar o loop
            break; // Sai do loop
        }
    }
    
    if (!usuarioEncontrado) {
        alert('Usuário ou senha incorretos!');
    }
}
