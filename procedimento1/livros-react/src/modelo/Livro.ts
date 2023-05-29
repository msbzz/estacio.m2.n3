export class Livro {
    
    private _codigo?: number=0;
    private _codEditora?:number=0;
    private _título?: string='';
    private _resumo?: string='';
    private _autores?:string[]=[];

    constructor(code?: number,codEditora?:number, título?: string, resumo?: string,autores?:string[]) {
        
        this._codigo = code;
        this._codEditora=codEditora;
        this._título = título;
        this._resumo = resumo;
        this._autores = autores
    } 

    public get codigo():number{
        return this._codigo? this._codigo :0;
    }     
    public get codEditora():number{
        return this._codEditora? this._codEditora :0;
    }
    public get titulo(): string {
        return this._título? this._título :'';
      }

    public get resumo(): string {
        return this._resumo? this._resumo :'';
      }

    public get autores(): string[] {
        return this._autores?this._autores:[];
      }

}




/**
 * 
  b) No arquivo Livro.ts, criar a classe Livro, composta dos campos: codigo e

  , numéricos, título e resumo, ambos do tipo texto, e autores, como um
vetor de texto
 * 
 */