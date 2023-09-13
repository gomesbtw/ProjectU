import {jogosColecao} from "./dbConnect.js";



async function obterImagemDoBancoDeDados() {
    try {
      const cursor = jogosColecao.find();
      const jogos = await cursor.toArray();
     
       
      return jogos[0].img;
        
    
    } catch (error) {
      console.log("deu erro no banco de dados");
      console.error(error);
    }
  }
  async function obterImagemDoBancoDeDados2() {
    try {
      const cursor = jogosColecao.find();
      const jogos = await cursor.toArray();
    
       
      return jogos[1].img;
        
    
    } catch (error) {
      console.log("deu erro no banco de dados");
      console.error(error);
    }
  }
 
  

export {obterImagemDoBancoDeDados, obterImagemDoBancoDeDados2};

 