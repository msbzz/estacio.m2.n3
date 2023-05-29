import { Livro } from "../modelo/Livro";
 
export default class ControleLivros {

  private livros=[
    {
      codigo: 1,
      codEditora:1,
      título: "HTML5 e CSS3: guia prático e visual",
      resumo:
        "Aprenda HTML5 e CSS3 de forma rápida e fácil!•A abordagem de fácilvisualização utiliza exemplos de códigos do mundo real para guiá-lo pelo aprendizado de HTML e CSS",
      editora: "Alta Books",
      autores: ["Elizabeth Castro", "Bruce Hyslop"]
    },
    {
      codigo: 2,
      codEditora:2,
      título: "CSS Grid Layout: Criando Layouts CSS Profissionais",
      resumo:
        "A criação de Layout CSS sempre foi uma tarefa trabalhosa, mas agora os profissionais têm uma ferramenta poderosa ao seu alcance, o CSS Grid Layout",
      editora: "Alta Books",
      autores: ["Maurício Samy Silva"],
    },
    {
      codigo: 3,
      codEditora:3,
      título: "Padrões JavaScript",
      resumo:
        "Qual é a melhor maneira de desenvolver uma aplicação em JavaScript? Este livro, ao apresentar inúmeros padrões e as melhores práticas no JavaScript",
      editora: "Novatec Editora",
      autores: ["Stoyan Stefanov"],
    },
  ];

  public obterLivros() {
     return this.livros
  }
   

  public incluir(item: Livro): void {
    const novoCod = this.livros[this.livros.length - 1].codigo + 1;
 
  }

  public excluir(cod: number): void {
    const index = this.livros.findIndex((item) => item.codigo === cod);
    //console.log('excluir index ==>>',index)
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
    //console.log('excluir livros',this.livros)
  }
}

 