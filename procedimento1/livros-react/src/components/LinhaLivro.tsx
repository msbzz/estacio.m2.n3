 
import  ControleEditora  from "../controle/ControleEditora";
import "./LinhaLivro.css";
import { Livro } from "../modelo/Livro";
 

interface LinhaLivroProps{
  livro:Livro,
  excluir:(ind:number)=>void
}

function LinhaLivro(props:LinhaLivroProps) {

  const controleEditora= new ControleEditora()

  const livro = props.livro
  
  let nomeEditora=controleEditora.getNomeEditora(livro.codEditora)
  
 

  let contLivro=0
  
  function bE_par(valor:number):boolean{
     const ePar = (valor/2 ===0)
     return ePar
  }

  function renderAutores(autores:string[]){
    return(
      autores.map((autor,index)=><li key={index}>{autores}</li>)
    )
  }

  function renderLivro(){
    

    return(
     
    <tr className={bE_par(livro.codigo)?'odd':'even'}>
      <td key={livro.codigo}>
        <div className="hd-title">
          <span>{livro.titulo}</span>
          <button onClick={() => props.excluir(livro.codigo)}>Excluir</button>
        </div>
      </td>
      <td>
          {livro.resumo}
      </td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {renderAutores(livro.autores)}
        </ul>
      </td>
    </tr>      
    )
  }

  return (
    <>
 
        <tbody>
        <tr>
          <th>Titulo</th>
          <th>Resumo</th>
          <th>Editora</th>
          <th>Autores</th>
        </tr>
              
            {renderLivro()}
       </tbody>  
     </>
  );
}
export default LinhaLivro;
