import { mostrarImagemJogo,mostrarTituloJogo, mostrarPrecoJogo,mostrarSinopseJogo} from "./socket-front-jogo.js";
import { removerCookie, obterCookie } from "../utils/cookies.js";

const tokenJwt = obterCookie("tokenJwt");

console.log(tokenJwt);

const btnLogout = document.getElementById("btnLogout");

//console.log("exibindo imagem");
const imagemJogo = document.getElementById('img-game');
const imagemJogo2 = document.getElementById('img-game2');

const titulos = document.getElementsByClassName('titulo');

const precos = document.getElementsByClassName('preco');
const sinopse = document.getElementsByClassName('sinopse');
document.addEventListener("DOMContentLoaded", function () {
  mostrarImagemJogo(imagemJogo,imagemJogo2);

  mostrarTituloJogo(titulos);

  mostrarPrecoJogo(precos);
  console.log("ta chegando aq");
  mostrarSinopseJogo(sinopse);
});
  
btnLogout.addEventListener("click", () => {
  removerCookie("tokenJwt");
  
  window.location.href = "/"      
});


