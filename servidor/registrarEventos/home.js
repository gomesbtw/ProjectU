import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import {obterImagemDoBancoDeDados,obterImagemDoBancoDeDados2 } from "../db/imagemJogos.js"
import {obterTituloJogos,obterPrecoJogos,obterSinopseJogos} from "../db/obterDadosJogos.js"



async function registrarEventosImagem(socket, io) {
   socket.on("imagemJogoPrincipal", async () => {

     const novaImagem = await obterImagemDoBancoDeDados();
     const novaImagem2 = await obterImagemDoBancoDeDados2();
     const listaDeImagens = [novaImagem,novaImagem2]
   
    socket.emit("retorno_imagem_sucesso", listaDeImagens);
   });
 }

 
async function registrarEventosTitulos(socket, io) {
  socket.on("tituloJogo", async () => {
  
  const listaDeTitulos = await obterTituloJogos();
  
   socket.emit("retorno_titulo_sucesso", listaDeTitulos);
  });
}

async function registrarEventosPrecos(socket, io) {
  socket.on("precoJogo", async () => {

  const listaDePrecos = await obterPrecoJogos();
  
   socket.emit("retorno_preco_sucesso", listaDePrecos);
  });
}

async function registrarEventosSinopseJogos(socket, io) {
  socket.on("sinopseJogo", async () => {
    console.log("ta chegando ate aq");
  const listaDeSinopse = await obterSinopseJogos();
   
   socket.emit("retorno_sinopse_sucesso", listaDeSinopse);
  });
}
export  {registrarEventosImagem,registrarEventosTitulos,registrarEventosPrecos,registrarEventosSinopseJogos};


    
     
   
 
export default registrarEventosImagem;
