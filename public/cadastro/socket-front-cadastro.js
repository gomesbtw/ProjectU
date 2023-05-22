const socket = io();

function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso!"));
socket.on("cadastro_erro", () =>{

const errorMessage = document.getElementById("loginErrorMessage");
  errorMessage.innerText = "Houve um erro no cadastro, por favor tente novamente mais tarde.";
  errorMessage.style.color = "red";});
socket.on("usuario_ja_existente", () => {

  const errorMessage = document.getElementById("loginErrorMessage");
    errorMessage.innerText = "Esse usuário já esta cadastrado por favor insira outro.";
    errorMessage.style.color = "red";});


export { emitirCadastrarUsuario };
