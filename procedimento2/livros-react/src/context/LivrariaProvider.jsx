import { useState } from "react";
import LivrariaContext from "./LivrariaContext";

import ControleLivros from "../controle/ControleLivros";

const controleLivro = new ControleLivros()

function LivrariaProvider(props) {
  const [livrosProvider, setlivrosProvider] = useState([]);
  const [incializado,setIncializado] =useState(false) 
  
  
  function incluirLivro(livro){
    controleLivro.incluir(livro)
    setlivrosProvider(controleLivro.obterLivros())
  }

  function excluirLivro(codigo){
    controleLivro.excluir(codigo)
    setlivrosProvider(controleLivro.obterLivros())
    
  }
  if(!incializado){
    setlivrosProvider(controleLivro.obterLivros());
    setIncializado(true)
  }
 
    

  return (
    <LivrariaContext.Provider value={{ livrosProvider,incluirLivro,excluirLivro }}>
      {props.children}
    </LivrariaContext.Provider>
  );
}

export default LivrariaProvider;
