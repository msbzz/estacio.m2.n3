import React, { useState, useEffect } from "react";

import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

import LinhaLivro from "./components/LinhaLivro";

export default function LivroLista() {
  const controleLivros = new ControleLivros();
  const controleEditora = new ControleEditora();

  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    setLivros(controleLivros.obterLivros());
    setCarregado(true);
    console.log('useEffect' )
  }, [carregado]);

  const excluir = (codigo) => {
    controleLivros.excluir(codigo);
    setCarregado(false)
    //setLivros(controleLivros.obterLivros());
  };

  function cargaLivros() {
    return livros.map((livro, ind) => {
      return <LinhaLivro key={ind} livro={livro} excluir={excluir} />;
    });
  }
  return (
    <>
      <main className="conteiner">
        <h1 style={{textAlign:'left' }}>Catálogo de Livros</h1>
        <table>{cargaLivros()}</table>
      </main>
    </>
  );
}
