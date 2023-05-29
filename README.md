 
## Estacio| Missão Prática | Nível 3 | Mundo 2

## Descrição

  Criação de front-end web com base em React JS ou Next JS, com utilização de bases de teste JSON, em memória, para ambas as plataformas.

  Projeto dividido em procedimentos no qual os dois primeiros são desenvolvidos em react se complementam. O ultimo é um projeto nextjs
     
  A partir dos objetivos listados abaixo, foram criadas duas versões de um front-end web, com base nas tecnologias React JS e Next JS,
onde foi possível lidar com contextos reais de aplicação das tecnologias abordadas:

Explorar a sintaxe Type Script na implementação de entidades e controladores, para projetos React JS e Next JS;

Criar um front-end para Web completo, baseado em componentesreutilizáveis, através do React JS;

Criar um front-end para Web completo, baseado em componentes reutilizáveis, através do Next JS;

Utilizar o Next JS para a definição de uma API no estilo REST, de uso interno, com acesso via função fetch, oferecida no ambiente padrão do Java Script. 

## Funcionalidades
 
  
👉 1º Procedimento | Listagem de Livros no React JS

Crie o projeto e inicie o ambiente de desenvolvimento:
    a) Abrir a linha de comandos

    b) Executar npx create-react-app livros-react --template typescript

    c) Entrar no diretório do projeto criado, executando cd livros-react

    d) Abrir o Visual Studio Code, executando code .\

No ambiente de desenvolvimento do Visual Studio Code, criar a estrutura
básica do projeto:
    a) Adicionar um folder com o nome modelo

    b) Criar, no folder modelo, os arquivos "Editora.ts" e "Livro.ts" (TypeScript)

    c) Adicionar um folder com o nome controle

    d) Criar, no folder controle, "ControleEditora.ts" e "ControleLivros.ts"

    e) Incluir as dependências do Bootstrap no arquivo index.html, encontrado
no folder public

    f) Criar os arquivos "LivroDados.js" e "LivroLista.js" (JavaScript) em src

A estrutura do projeto deverá ficar como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/85847e7c-8125-4a74-89e8-6211a97df65f)


Codifique as entidades do sistema (Editora e Livro):
    a) No arquivo Editora.ts, criar a classe Editora, com os campos codEditora,
numérico, e nome, do tipo texto

    b) No arquivo Livro.ts, criar a classe Livro, composta dos campos: codigo e
codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como
um vetor de texto

Codifique o controlador de editoras, no arquivo ControleEditora.ts:
    a) Importar a classe Editora

    b) Definir a variável editoras, como Array<Editora>, contendo ao menos três
elementos, no formato JSON

    c) Criar a classe ControleEditora, contendo os métodos getNomeEditora e
getEditoras

    d) Implementar o método getEditoras, com o retorno do vetor editoras

    e) Implementar o método getNomeEditora, recebendo codEditora, do tipo
numérico, e retornando o nome da editora, através de uma operação filter
sobre o vetor editoras

Codifique o controlador de livros, no arquivo ControleLivros.ts:
    a) Importar a classe Livro

    b) Definir a variável livros, como Array<Livro>, contendo ao menos três
elementos, no formato JSON

    c) Criar a classe ControleLivro, contendo os métodos obterLivros, incluir e
excluir

    d) Implementar o método obterLivros, com o retorno do vetor livros

    e) Implementar o método incluir, recebendo um objeto do tipo Livro, que terá
o código trocado pelo código mais alto do vetor, incrementado de um, e depois
será adicionado ao vetor

    f) Implementar o método excluir, recebendo um código numérico, que irá
encontrar o índice do livro com o código fornecido, através de findIndex, e
removê-lo com o uso de splice

Codifique o componente LivroLista, no arquivo LivroLista.js:
    a) Instanciar um controlador de livros, com o nome controleLivro, e um de
editoras, com o nome controleEditora

    b) Definir o componente auxiliar LinhaLivro, com parâmetro props, para a
recepção dos atributos livro e excluir, a partir da aplicação do seletor

    c) Definir em LinhaLivro o atributo nomeEditora, invocando o método
getNomeEditora, com a passagem de codEditora, atributo do livro

    d) No retorno do componente, deverá ser fornecida uma linha de tabela, ou
tr, com os valores dos atributos do livro nas tags td

    e) Abaixo do título, na primeira célula, adicionar um botão de exclusão, com
o recebimento de um método que será fornecido no atributo excluir

    f) Exibir os autores como uma lista HTML, efetuando a geração dos itens
através do método map, e tendo como key o valor de index

    g) Definir o componente LivroLista, exportado por padrão, sem parâmetros

    h) Em LivroLista, definir as propriedades livros, do tipo vetor, e carregado,
booleana, através de useState

    i) Utilizar o Hook useEffect, que deve alimentar livros com a chamada para
obterLivros, do controlador, e alterar carregado para true, tendo ainda como
balizador o atributo carregado

    j) Acrescentar o método excluir, estilo arrow function, que deve receber o
código do livro, invocar o método excluir do controlador, e setar o valor de
carregado como false, para forçar o redesenho da página

    k) No retorno do componente deve ser fornecida a área principal (main),
contendo o título da página e uma tabela para exibição dos livros

    l) Utilizar o método map, de livros, para a geração das linhas de dados como
componentes do tipo LinhaLivro, tendo como parâmetros o livro atual do vetor,
excluir invocando o método excluir de LivroLista, com a passagem do código do
livro corrente, e key associado ao código do livro

Altere o arquivo App.tsx, retornando em App o componente LivroLista;
Ajuste as características para obter uma página como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/abd4aeb8-1f89-45a0-9a35-e0da0e662613)


Verifique os resultados obtidos através de um navegador, lembrando de testar
a funcionalidade da exclusão de livro.

👉 2º Procedimento | Página de Cadastro e Navegação no React JS

Ajuste as rotas de navegação do sistema livros-react:
    a) Adicionar o pacote de navegação com npm instal react-router-dom

    b) Definir o componente LivroDados, em LivroDados.js, inicialmente com o
retorno de uma tag main e uma mensagem de "Olá mundo", devendo ser
exportado por padrão

    c) Alterar o arquivo App.tsx, com a adição das rotas e menu de navegação

    d) No retorno do componente deve ser fornecido um BrowserRouter, onde as
rotas, na divisão Routes, serão a raiz, apontando para LivroLista, e dados,
apontando para LivroDados

    e) Precedendo a divisão Routes, definir o menu de navegação, com tag nav,
formatado pelo BootStrap, e utilizar elementos do tipo Link, no lugar das
âncoras, para acesso às rotas definidas

Ajuste as características para obter uma página como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/ab798b7a-7dba-4607-be4f-7db29a4b121c)


Implemente o componente LivroDados, no arquivo LivroDados.js:
    a) Instanciar um controlador de livros, com o nome controleLivro, e um de
editoras, com o nome controleEditora

    b) Em LivroDados, definir o vetor opcoes, invocando o método getEditoras,
com o mapeamento de codEditora para value e nome para text

    c) Definir as propriedades titulo, resumo e autores, todas de texto, através
de useState, além de codEditora, iniciada com a posição zero de opcoes

    d) Acrescentar o atributo navigate, recebendo o Hook useNavigate

    e) Definir o método tratarCombo, tendo o evento como parâmetro, onde
deve ocorrer a chamada para setCodEditora, com a passagem do value de uma
combo de seleção (target do evento) convertido para number

    f) Definir o método incluir, com a recepção de um evento, que primeiro deve
eliminar o comportamento padrão com preventDefault, em seguida instanciar
um livro com código valendo zero, o valor das propriedades de estado, e
autores separados por linha (split), invocar o método incluir do controlador de
livros, e navegar para a página de listagem, na raiz

    g) No retorno do componente deve ser fornecida a área principal (main),
contendo o título da página e um formulário para inclusão do livro, sendo
composto dos campos referentes às propriedades de estado, com ligação
através de value e onChange

    h) Utilizar uma lista de seleção (combo) para as editoras, com as opções
geradas pelo método map, de opcoes, e associando onChange ao método
tratarCombo

    i) Relacionar o evento onSubmit, do formulário, ao método incluir, além de
adicionar um botão de submissão ao final

Ajuste as características para obter uma página como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/62e0bf92-b92b-45cb-916c-3c0d31a3e915)


Verifique os resultados obtidos através de um navegador, lembrando de testar
a nova funcionalidade de inclusão de livros.

👉 3º Procedimento | Criação do Aplicativo com Next JS

Crie o aplicativo e configure o ambiente:
    a) Executar o comando npx create-next-app livros-next  --typescript

    b) Entrar no diretório do projeto criado, executando cd livros-next

    c) Abrir o Visual Studio Code, executando code .\

    d) No ambiente de edição, criar um diretório (folder) com o nome classes, e
copiar os diretórios modelo e controle, do projeto livros-react, com seus
respectivos arquivos Type Script, para dentro do novo diretório

    e) Criar o diretório componentes, e dentro dele adicionar os arquivos para
componentes auxiliares, com os nomes "LinhaLivro.tsx" e "Menu.tsx"

    f) No diretório pages/api, criar os diretórios com os nomes editoras e livros

    g) No diretório editoras, criar os arquivos "[codEditora].ts" e "index.ts"

    h) No diretório livros, criar os arquivos "[codigo].ts" e "index.ts"

A estrutura do projeto deverá ficar como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/4d95f30d-ded4-45c4-9f0d-691d3645a288)


Implemente a API de gerenciamento de editoras via HTTP:
    a) Codificar o arquivo index.ts, no diretório pages/api/editoras, iniciando
com a definição de uma instância exportável de ControleEditora, com o nome
controleEditora

   b) Definir a assinatura para tratamento das solicitações, cujo formato deve
ser export default (req: NextApiRequest, res: NextApiResponse) => { }

    c) Implementar o tratamento de requisições, respondendo no método GET
com status 200 e o vetor de editoras, obtido via método getEditoras, de
controleEditoras, no formato JSON

    d) Tratar os status 405, para método não permitido, e 500, para exceção
ocorrida no servidor

    e) Codificar o arquivo [codEditora].ts, no diretório pages/api/editoras

    f) Importar o controlador de editoras instanciado em index.ts, utilizando o
comando import {controleEditora} from '.'

    g) Definir a assinatura para tratamento das solicitações, cujo formato deve
ser export default (req: NextApiRequest, res: NextApiResponse) => { }

    h) Implementar o tratamento de requisições, respondendo no método GET
com status 200 e um objeto JSON com o nome da editora, obtido através de
getNomeEditora, tendo como parâmetro codEditora, fornecido na URL de
acesso e recuperado via req.query, convertido para number

    i) Tratar os status 405, para método não permitido, e 500, para exceção
ocorrida no servidor

Teste a nova API
    a) Iniciar a execução do aplicativo através do comando npm run dev

    b) Abrir o endereço http://localhost:3000/api/editoras no navegador

    c) Abrir o endereço http://localhost:3000/api/editoras/3 no navegador

Os resultados obtidos devem ser os que são apresentados a seguir:

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/a771918b-b4c5-4c9c-8ea0-82d8e21c2950)

Implemente a API de gerenciamento de editoras via HTTP:
    a) Codificar o arquivo index.ts, no diretório pages/api/livros, iniciando com a
definição de uma instância exportável de ControleLivro, utilizando o nome
controleLivro

    b) Definir a assinatura para tratamento das solicitações, cujo formato deve
ser export default (req: NextApiRequest, res: NextApiResponse) => { }

    c) Implementar o tratamento de requisições, respondendo no método GET
com status 200 e o vetor de livros, obtido via método obterLivros, de
controleLivro, no formato JSON

    d) Responder ao método POST com a captura dos dados do livro, fornecido
no corpo da requisição, no formato JSON, a partir de req.body, inclusão no
vetor de livros via método incluir, de controleLivros, e retorno para o chamador
com status 200 e mensagem de sucesso no formato JSON

    e) Tratar os status 405, para método não permitido, e 500, para exceção
ocorrida no servidor

    f) Codificar o arquivo [codigo].ts, no diretório pages/api/livros

    g) Importar o controlador de livros instanciado em index.ts, utilizando o
comando import {controleLivro} from '.'

    h) Definir a assinatura para tratamento das solicitações, cujo formato deve
ser export default (req: NextApiRequest, res: NextApiResponse) => { }

    i) Implementar o tratamento de requisições, respondendo ao DELETE com a
captura do código fornecido na URL, via req.query, exclusão do livro no vetor,
via método excluir de controleLivro, e retorno ao chamador com status 200 e
mensagem de sucesso no formato JSON

    j) Tratar os status 405, para método não permitido, e 500, para exceção
ocorrida no servidor

Teste a nova API, efetuando uma consulta no navegador a partir do endereço
http://localhost:3000/api/livros, onde deve ser retornado o vetor de livros
no formato JSON, e opcionalmente testar os demais métodos (POST e
DELETE) via Postman, Boomerang, ou outra ferramenta para envio de
requisições
Habilite o Bootstrap no aplicativo Next JS:
    a) Parar o aplicativo livros-next, caso esteja em execução, e executar o
comando npm install bootstrap

    b) Alterar o conteúdo de _app.tsx para o que é apresentado a seguir, com a
importação da folha de estilo do Bootstrap, deixando-a disponível para todos os
componentes

![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/a46f38fe-28c1-469e-a36c-5b8588be6dff)

Implemente o componente LinhaLivro, no arquivo LinhaLivro.tsx:
    a) Iniciar com a definição de uma instância de ControleEditora, com o nome
controleEditora, utilizado internamente para diminuir a quantidade de
chamadas assíncronas, já que os dados de editoras não são dinâmicos

    b) Definir a interface LinhaLivroProps, com o atributo livro, do tipo Livro, e
método excluir(), do tipo void

    c) Definir o componente exportável LinhaLivro, com parâmetro props, para a
recepção dos atributos livro e excluir, a partir do seletor, utilizando export
const LinhaLivro: React.FC<LinhaLivroProps> = (props) => { }

    d) Copiar o corpo da função LinhaLivro, encontrada no arquivo LivroLista.js,
do projeto livros-react, para o corpo da nova função, o que se justifica pelo fato
de que apenas a assinatura é modificada para uso no Next JS

Crie o arquivo LivroLista.tsx, no diretório pages, com o conteúdo seguinte:

 ![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/9d231ab3-e7f2-444e-bb44-2928ae7e0377)
 
Implemente o componente Menu.tsx, de acordo com as instruções seguintes:
    a) Definir o componente com export const Menu: React.FC = () => { }

    b) Retornar o menu de navegação, com tag nav, formatado pelo BootStrap

    c) Utilizar elementos do tipo Link, da biblioteca next/link

    d) Através do atributo href, de Link, fornecer acesso para as páginas index,
LivroLista e LivroDados, como opções do menu de navegação

Altere o componente Home, no arquivo index.tsx:
    a) No retorno, manter a div inicial, com classe CSS container

    b) No componente Head, alterar title para "Loja Next"

    c) Acrescentar um componente Menu após Head

    d) Após o menu, definir a área principal (main), com estilo styles.main, e
dentro dela criar um título h1, com estilo styles.title e texto Página Inicial

    e) Apagar todo o restante da página original

Ajuste as características para obter uma página como o exemplo abaixo:
 
 ![image](https://github.com/msbzz/estacio.m2.n3/assets/44148209/414fc266-8767-4612-9f95-c1bf68881a1a)

 
Implemente o componente LivroLista, no arquivo LivroLista.tsx:
    a) Importar os estilos com import styles from '../styles/Home.module.css'

    b) Definir uma constante com o nome baseURL, do tipo texto, utilizando o
valor "http://localhost:3000/api/livros"

    c) Criar a função obter, assíncrona, no estilo arrow function, com a chamada
para baseURL, via fetch, e retorno da resposta no formato JSON

    d) Criar a função excluirLivro, assíncrona, no estilo arrow function, tendo o
parâmetro codigo, numérico, com a chamada para baseURL/codigo via fetch,
no modo DELETE, e retorno do campo ok da resposta, indicando sucesso ou
falha

    e) Em LivroLista, definir as propriedades livros, do tipo Array<Livro>, e
carregado, booleana, através de useState

    f) Utilizar o Hook useEffect, que deve efetuar a chamada para obterLivros,
assíncrona, alimentando a propriedade de estado livros no retorno, via operador
then, e alterar carregado para true, tendo ainda como balizador o atributo
carregado

    g) Acrescentar o método excluir, estilo arrow function, que deve receber o
código do livro, invocar a função excluir, assíncrona, e no retorno setar o valor
de carregado como false, para forçar o redesenho da página

    h) No retorno do componente deve ser fornecida uma div, formatada com
styles.container, e dentro dela um componente Head, equivalente ao que foi
utilizado na página Home, um componente Menu, e a área main, contendo o
título da página e uma tabela para exibição dos livros

    i) Utilizar o método map, de livros, para a geração das linhas de dados como
componentes do tipo LinhaLivro, tendo como parâmetros o livro atual do vetor,
excluir invocando o método excluir de LivroLista, com a passagem do código do
livro corrente, e key associado ao código do livro

Implemente o componente LivroDados, no arquivo LivroDados.tsx
    a) Importar os estilos com import styles from '../styles/Home.module.css'

    b) Definir um objeto do tipo ControleEditora, com o nome controleEditora

    c) Definir uma constante com o nome baseURL, do tipo texto, utilizando o
valor "http://localhost:3000/api/livros"

    d) Criar a função incluirLivro, assíncrona, no estilo arrow function, tendo o
parâmetro livro, do tipo Livro, com a chamada para baseURL via fetch, no
modo POST, incluindo o tipo de conteúdo como informação do header e o livro
no body, convertido com JSON.stringfy. O retorno da função será o campo ok
da resposta, indicando sucesso ou falha

    e) Em LivroDados, definir o vetor opcoes, invocando o método getEditoras,
com o mapeamento de codEditora para value e nome para text

    f) Definir as propriedades titulo, resumo e autores, todas de texto, através
de useState, além de codEditora, iniciada com a posição zero de opcoes

    g) Acrescentar o atributo navigate, recebendo o Hook useNavigate

    h) Definir o método tratarCombo, tendo como parâmetro o evento, do tipo
React.ChageEvent<HTMLSelectElement>, onde deve ocorrer a chamada para
setCodEditora, passando value, da lista, convertido para number

    i) Definir o método incluir, apresentando como parâmetro um evento do tipo
React.FormEvent<HTMLFormElement>, que primeiro deve eliminar o
comportamento padrão com preventDefault, em seguida instanciar um livro
com código valendo zero, o valor das propriedades de estado, e autores
separados por linha (split), invocar a função incluir, assíncrona, e, no retorno
dela, navegar para a página LivroLista, através do sistema de navegação do
Next JS, com a chamada para Router.push

    j) No retorno do componente deve ser fornecida uma div, formatada com
styles.container, e dentro dela um componente Head, equivalente ao que foi
utilizado na página Home, um componente Menu, e a área main, contendo o
título da página e o formulário para inclusão do livro

    k) Implementar o formulário referente aos campos utilizados para definir as
propriedades de estado, com ligação através de value e onChange

    l) Utilizar uma lista de seleção (combo) para as editoras, com as opções
geradas pelo método map, de opcoes, e associando onChange ao método
tratarCombo

    m) Relacionar o evento onSubmit, do formulário, ao método incluir, além de
adicionar um botão de submissão ao final

A execução do projeto deverá fornecer as mesmas funcionalidades de livro-
react, bem como aparência muito similar, mas agora com o gerenciamento da
base de livros a partir da API interna, acessada de forma assíncrona, via
fetch;
Verifique os resultados obtidos através de um navegador.
 
## Pré-requisitos
Antes de iniciar, verifique se você possui os seguintes requisitos:
- Navegador web atualizado (recomenda-se o Google Chrome, Mozilla Firefox ou Microsoft Edge)
 

## Instalação
Siga estas etapas para instalar e executar o projeto em sua máquina local:

1. Clone o repositório: 
   ```bash
   git clone https://github.com/msbzz/estacio.m2.n2.git
   ```
   
   
2. Navegue até o diretório do projeto:
   ```bash
   2.1 procedimento 1
   
      cd procedimento1/exemplosjs
      
   2.2. Abra o arquivo `ordenando.html` em seu navegador.

   2.3 procedimentos 2  
    
      cd procedimento2 
    
   2.4. Abra o arquivo `receitas.html` em seu navegador.
     
   2.5 procedimentos 3
    
      cd procedimento3 
 
   2.6. Abra o arquivo `usuarios.html` em seu navegador.
   
   ``` 
## Tecnologias utilizadas
- HTML
- Bootstrap
- CSS
- JavaScript

## Estrutura de diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:

```
nome-do-repositorio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── imagem1.jpg
│   └── imagem2.png
└── README.md
```

## Contribuição
Contribuições são bem-vindas! Se você quiser colaborar com este projeto, siga as etapas abaixo:

1. Faça um fork do projeto
2. Crie uma branch para sua nova feature (`git checkout -b feature/nova-feature`)
3. Faça o commit das suas alterações (`git commit -am 'Adicione uma nova feature'`)
4. Envie para o repositório remoto (`git push origin feature/nova-feature`)
5. Abra uma Pull Request

## Licença
Este projeto está licenciado sob a [descreva a licença utilizada]. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

## Contato
- [Seu nome](mailto:seu-email@exemplo.com)
- [Link do projeto](https://github.com/seu-usuario/nome-do-repositorio)
