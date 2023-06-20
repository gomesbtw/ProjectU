import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColecao } from "./dbConnect.js";

function encontrarUsuario(contato) {
  find(query).limit(1).next(function(err, doc){
    // handle data
    $or: [
      { email: contato },
      { tel: contato }
    ]
 });
}

function cadastrarUsuario({ email, tel,senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColecao.insertOne({ email, tel,hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
