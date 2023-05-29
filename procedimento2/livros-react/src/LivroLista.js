import React, { useState, useEffect, useContext } from "react";

 
import LinhaLivro from "./components/LinhaLivro";

import LivrariaContext from "./context/LivrariaContext";
 
export default function LivroLista() {
  

const { livrosProvider,excluirLivro } = useContext(LivrariaContext);
  

  const [livros, setLivros] = useState([]);
 
  
  useEffect(() => {
      
      setLivros(livrosProvider);
    
}, [livros]);

  const excluir = (codigo) => {
    excluirLivro(codigo);
    setLivros([])
  };

  function cargaLivros() {
    return livros.map((livro, ind) => {
      return <LinhaLivro key={ind} livro={livro} excluir={excluir} />;
    });
  }
  return (
    <div className="container">
       
      <main>
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped">
          <thead className="bg-dark text-white">
            <tr>
              <th>Titulo</th>
              <th>Resumo</th>
              <th>Editora</th>
              <th>Autores</th>
            </tr>
          </thead>
          <tbody>{cargaLivros()}</tbody>
        </table>
      </main>
    </div>
  );
}
