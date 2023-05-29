import { Editora } from '../modelo/Editora';

interface iEditora {
    nome: string;
    codEditora: number;
  }

export default class ControleEditora {
    
    empCode?: number;
    empNome?: string;

    constructor(code?: number, name?: string) {
        this.empNome = name;
        this.empCode = code;
    }
    
    
    
    private readonly editoras : iEditora[] = [
        { nome: 'AliceEdition', codEditora: 1 },
        { nome: 'BobBlogs', codEditora: 2 },
        { nome: 'CharlieScience', codEditora: 3 },
      ];
      
      public getEditoras(): iEditora[] {
        return this.editoras;
      }
      
 
      public getNomeEditora(cod: number): string | undefined {
        const itemEncontrado = this.editoras.filter(item => item.codEditora === cod);
        return itemEncontrado[0]?.nome;
      }
    
}
  
 