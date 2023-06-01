import type { NextPage } from "next";

import React, { useEffect, useState } from "react";

import { LinhaLivro } from "@/componentes/LinhaLivro";

import style from "../styles/LivroLista.module.css";

const baseURL = "http://localhost:3015/api/livros";

export const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);
 
  
  const obter = async () => {
    const resp = await fetch(baseURL);
    const livrosLocal = await resp.json();
    return livrosLocal;
  };

  const excluir = async (id: number) => {
    console.log("dentro de excluir", baseURL + `/${id}`);
    const response = await fetch(baseURL + `/${id}`, {
      method: "DELETE",
    });

    setCarregado(false);
  };
 
  const carregarLivros = async () => {
    const listaLivros = await obter();
    setLivros(listaLivros);
  };
 

  useEffect(() => {
    carregarLivros().then(() => setCarregado(true));
  }, [carregado]);

  
  const excluirLivro = (id: number) => {
    console.log("excluirLivro", id);
    excluir(id);
  };
 
 
  const cargaLivros = () => {
    return livros.map((livro, ind) => {
        
      return (
        <>
          <LinhaLivro livro={livro} excluir={excluirLivro} />
        </>
      );
    }); 
  };
  

  return (
    //
    <div className="container">
      <main>
        <h1 className={style.cssh1}>Catálogo de Livros</h1>
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
};

export default LivroLista;
