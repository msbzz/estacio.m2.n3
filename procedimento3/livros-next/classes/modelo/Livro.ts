export class Livro {
    
    private _codigo?: number=0;
    private _codEditora?:number=0;
    private _título?: string='';
    private _resumo?: string='';
    private _autores?:string[]=[];

    constructor(codigo?: number,codEditora?:number, título?: string, resumo?: string,autores?:string[]) {
        
        this._codigo = codigo;
        this._codEditora=codEditora;
        this._título = título;
        this._resumo = resumo;
        this._autores = autores
    } 

    public set codigo(value:number){
      this._codigo =value
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

 