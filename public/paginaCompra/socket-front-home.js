import { obterCookie } from "../utils/cookies.js";



function mostrarImagemJogo(dados){
    socket.emit("imagemJogoPrincipal",dados);
};


function mostrarTituloJogo(dados){
    socket.emit("tituloJogo",dados);
};

function mostrarPrecoJogo(dados){
    socket.emit("precoJogo",dados);
};


const socket = io("/usuarios",{
    auth:{
        token:obterCookie("tokenJwt")
    },
});



socket.on("connect_error", (erro) => {
    window.location.href = "/";
  });



socket.on("retorno_imagem_sucesso", (dados2) =>{
    const dados1 = dados2[0]
    const imagem = document.getElementById("img-game")
    imagem.src= dados1
   
    const imagem2 = document.getElementById("img-game-segunda")
    const dados3 = dados2[1]
    imagem2.src= dados3

    const imagens = document.getElementsByName("img-game")
    for (let i = 0; i < imagens.length; i++) {
        if (i < dados2.length) {
          imagens[i].src = dados2[i];
        } else {
          console.log("concluido") 
        }
      }
    document.dispatchEvent(new Event('imagens-prontas'));
});

socket.on("retorno_titulo_sucesso", (dados2) =>{
    const titulos = document.getElementsByName("titulo")
    for (let i = 0; i < titulos.length; i++) {
        if (i < dados2.length) {
            
            titulos[i].textContent = dados2[i];

          
        } else {
          console.log("concluido") 
        }
      }
});

socket.on("retorno_preco_sucesso", (dados2) =>{
 
    const precos = document.getElementsByName("preco")
    console.log(dados2)
    for (let i = 0; i < precos.length; i++) {
        if (i < dados2.length) {
            
            precos[i].textContent = dados2[i];
            console.log(precos[i]);
          
        } else {
          console.log("concluido") 
        }
      }
});







export {mostrarImagemJogo,mostrarTituloJogo,mostrarPrecoJogo};
