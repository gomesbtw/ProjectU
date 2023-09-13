import { mostrarImagemJogo,mostrarTituloJogo, mostrarPrecoJogo} from "./socket-front-home.js";
import { removerCookie, obterCookie } from "../utils/cookies.js";

const tokenJwt = obterCookie("tokenJwt");

console.log(tokenJwt);

const btnLogout = document.getElementById("btnLogout");

//console.log("exibindo imagem");
const imagemJogo = document.getElementById('img-game');
const imagemJogo2 = document.getElementById('img-game2');

const titulos = document.getElementsByClassName('titulo');

const precos = document.getElementsByClassName('preco');

  mostrarImagemJogo(imagemJogo,imagemJogo2);

  mostrarTituloJogo(titulos);

  mostrarPrecoJogo(precos);
  
btnLogout.addEventListener("click", () => {
  removerCookie("tokenJwt");
  
  window.location.href = "/"      
});


