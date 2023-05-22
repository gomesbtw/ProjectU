import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://luan:123@cluster0.ufkuy08.mongodb.net/alura-node"
);

let documentosColecao, usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuariosTeste");

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
