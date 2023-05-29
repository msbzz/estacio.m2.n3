import { Livro } from "../modelo/Livro";
 
const livros=[
  {
    codigo: 1,
    codEditora:1,
    titulo: "HTML5 e CSS3: guia prático e visual",
    resumo:
      "Aprenda HTML5 e CSS3 de forma rápida e fácil!•A abordagem de fácilvisualização utiliza exemplos de códigos do mundo real para guiá-lo pelo aprendizado de HTML e CSS",
    editora: "Alta Books",
    autores: ["Elizabeth Castro", "Bruce Hyslop"]
  },
  {
    codigo: 2,
    codEditora:3,
    titulo: "CSS Grid Layout: Criando Layouts CSS Profissionais",
    resumo:
      "A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout",
    editora: "Alta Books",
    autores: ["Maurício Samy Silva"],
  },
  {
    codigo: 3,
    codEditora:2,
    titulo: "Padrões JavaScript",
    resumo:
      "Qual é a melhor maneira de desenvolver uma aplicação em JavaScript? Este livro, ao apresentar inúmeros padrões e as melhores práticas no JavaScript",
    editora: "Novatec Editora",
    autores: ["Stoyan Stefanov"],
  },
];

interface propsLivro{
   codigo : number; 
   codEditora :number;
   título : string;
   resumo : string;
  autores :string[]
}

export default class ControleLivros {
   
  listaLivros: Livro[] = []; // inicializa como uma array vazia
   
  
  constructor(){
    this.cargaLivros(); 
 
  }
  

  cargaLivros(){
    this.listaLivros = livros.map(l => new Livro(l.codigo, l.codEditora, l.titulo, l.resumo, l.autores));
  }

  public obterLivros():Livro[]  {
      return this.listaLivros;
     
  }
   
  public incluir(livro:Livro):void {
    let novoCod = livros[livros.length - 1].codigo + 1;
    livro.codigo=novoCod
    this.listaLivros.push(livro);
  }
 

  public excluir(cod: number): void {
      
    let index = this.listaLivros.findIndex((item) => item.codigo === cod);
 
    if (index >= 0) {
      this.listaLivros.splice(index, 1);
   
    }
 
  
  }
}
 