 
## Estacio| Missão Prática | Nível 3 | Mundo 2

## Descrição

  Projeto dividido em procedimentos no qual é experimentado diversas formas de utilização do Java Script no lado cliente,
   
  O procedimento 1 trata-se de uma pagina de uma pagina de comparação entre algoritmos de ordenação. 
  
  Os procedimentos 2 e 3 são sobre leitura e apresentação de dados que estarão se completando no final ou seja, no procedimento 3. 
  
  
 
## Funcionalidades
 
 👉 1º Procedimento | Ordenando com Java Script e DOM

Crie um diretório com o nome "exemplosjs" e abra o Visual Studio Code;
Crie um arquivo com o nome "ordenando.js", no ambiente de edição;
Modifique o conteúdo do arquivo com a definição das seguintes funções,
todas criadas no padrão Arrow Function:
    a) Função swap, com o objetivo de trocar os valores de duas posições de um
vetor, tendo como parâmetros de entrada o vetor e as posições

    b) Função shuffle, com o objetivo de embaralhar os elementos de um vetor,
tendo como parâmetros de entrada o vetor e a quantidade de trocas

    c) Função bubble_sort, para ordenar um vetor de inteiros com o algoritmo
Bubble Sort, tendo como parâmetro de entrada o vetor de inteiros

    d) Função selection_sort, para ordenar um vetor de inteiros utilizando o
algoritmo Selection Sort, tendo como parâmetro de entrada o vetor de valores
inteiros

    e) Função quick_sort, para ordenar um vetor de inteiros com o algoritmo
Quick Sort, recursivo, tendo como parâmetros o vetor, posição inicial e posição
final

 f) Função particionamento, de apoio a quick_sort, tendo como parâmetros o
vetor, posição inicial, posição final e valor do pivot

Crie uma página com o nome "ordenando.html", no ambiente de edição;
Defina a estrutura básica da página, digitando "html" seguindo de CTRL +
Espaço, e selecionando a opção HTML: 5;

![image](https://github.com/msbzz/estacio.m2.n2/assets/44148209/7bfc3ab9-01f4-4a2d-941b-0df492436cb1)


Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir a biblioteca ordenando.js em uma tag script

    c) Definir um campo de entrada numérico, com o id valor

    d) Adicionar um botão com texto Adicionar, efetuando a chamada para uma
função de nome add no clique

    e) Definir um campo de seleção com as opções Blubble Sort, Selection Sort e
Quick Sort, com Bubble Sort selecionado por padrão

    f) Adicionar um botão com o texto Ordenar, chamando a função ordenar

    g) Adicionar um botão com o texto Misturar, chamando a função misturar

    h) Definir uma lista (ul) com id valores, sem opções internas

    i) Definir um trecho script, com as funções add, ordenar e misturar, todas no
estilo clássico de escrita do Java Script e sem parâmetros

Implemente a função add, para adicionar o valor digitado no campo de
entrada à lista de valores, de acordo com os passos seguintes:
    a) Capturar o campo de entrada com id valor via getElementById

    b) Capturar a lista com id valores

    c) Criar uma variável node, com um elemento li definido via createElement

    d) Definir um nó de texto, com o valor do campo de entrada, e incluí-lo como
filho de node

    e) Adicionar o elemento node à lista valores

Implemente a função ordenar, para a ordenação da lista de valores, de acordo
com os passos apresentados a seguir:
    a) Capturar a lista de valores e a lista de seleção via getElementById

    b) Através do atributo children, obter cada nó da lista de valores e adicionar
o conteúdo do item, convertido para inteiro, em um vetor

    c) Os conteúdos podem ser obtidos via innerHTML e convertidos com eval

    d) Escolher o algoritmo de ordenação adequado, a partir do selectedIndex da
lista de seleção, e aplicar ao vetor

    e) Utilizar os operadores map e reduce, do vetor, para gerar os novos itens
da lista de valores, substituindo o conteúdo da lista via innerHTML

Implemente a função misturar, para embaralhar os valores da lista, de acordo
com os passos apresentados a seguir:
    a) Capturar a lista de valores via getElementById

    b) Através do atributo children, obter cada nó da lista de valores e adicionar
o conteúdo do item, convertido para inteiro, em um vetor

    c) Os conteúdos podem ser obtidos via innerHTML e convertidos com eval

    d) Aplicar a função shuffle ao vetor

    e) Utilizar os operadores map e reduce, do vetor, para gerar os novos itens
da lista de valores, substituindo o conteúdo da lista via innerHTML

Ajuste as características para obter uma página como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n2/assets/44148209/e3a73449-f565-4eef-9448-cbabc3e0b6b6)


Por fim, verifique os resultados obtidos através de um navegador.
👉 2º Procedimento | Página de Receitas Dinâmica

Crie uma página com o nome "receitas.html", no ambiente de edição;
Defina a estrutura básica da página, digitando html seguido de CTRL +
Espaço, e selecionando a opção HTML:5;
Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir a folha de estilos do Bootstrap

    c) Incluir o título "Catálogo de Receitas"

    d) Definir a área principal como container-fluid

    e) Utilizar fundo bg-warning

    f) Definir uma div com apresentação no modo flex-wrap, identificada como
pnlCatalogo, para apresentação dos painéis para as receitas

    g) Acrescentar um trecho em Java Script

    h) Organizar os dados de receitas em um vetor de elementos JSON, com os
campos título, imagem, preparo e ingredientes, onde este último é um vetor de
elementos texto

    i) Definir as funções getListaIngredientes e getCard, ambos com parâmetro
receita, relacionados à estrutura adotada no segmento JSON

    j) Definir a função preencheCatalogo, sem parâmetros, invocada no evento
onload do elemento body

Acrescente as imagens das receitas, preferencialmente no formato PNG, para
posterior exibição nos painéis;
Implemente a função getListaIngredientes, para geração da lista em HTML:
    a) Iniciar a lista em uma variável texto com a tag ul

    b) Utilizar map e reduce, sobre o campo ingredientes da receita, para obter
a representação como itens de lista, baseados na tag li, concatenando na
variável de texto

    c) Finalizar concatenando o fechamento de ul e retornando a lista HTML

Implemente a função getCard, para geração do painel da receita:
    a) Utilizar substituição direta, com o texto entre sinais de crase

    b) Definir, no texto de retorno, uma div com classe card e largura de 250px

    c) Incluir uma imagem, com a classe card-img-top, tendo como origem o
campo imagem da receita

    d) Incluir uma div com classe card-body, referente ao corpo do painel

    e) Adicionar um título ao corpo, utilizando o campo titulo da receita, e classe
card-title para formatação

    f) Adicionar uma div com classe card-text ao corpo, apresentando a lista de
ingredientes, obtida via getListaIngredientes, um separador hr e texto do
campo preparo da receita

Implemente a função preencheCatalogo, para exibição do conjunto de
receitas na página, ao nível da div pnlCatalogo
    a) Capturar o elemento pnlCatalogo através de getElementById

    b) Através de map e reduce, obter o texto HTML para os painéis de receita,
formatados com base na função getCard, a partir do vetor JSON

    c) Alterar o innerHTML de pnlCatalogo para o texto HTML gerado

Ajuste as características para obter uma página como o exemplo abaixo:

 ![image](https://github.com/msbzz/estacio.m2.n2/assets/44148209/f84bc9fd-d74c-49ab-a9ef-5e1ad455d870)


Por fim, verifique os resultados obtidos através de um navegador.

👉 3º Procedimento | Transmissão de Dados e VUE JS

Acesse o endereço de teste REST https://reqres.in/api/users?per_page=10, e
observar os dados que são retornados no formato JSON
Crie uma página com o nome "usuarios.html", no ambiente de edição;
Defina a estrutura básica da página, digitando html seguido de CTRL +
Espaço, e selecionando a opção HTML:5;
Modifique o conteúdo do arquivo para obter as seguintes características:
    a) Alterar a linguagem para pt-br

    b) Incluir a folha de estilos do Bootstrap

    c) Incluir a biblioteca Java Script do VUE JS

    d) Se necessário, incluir a biblioteca Java Script do JQuery

    e) Aplicar as classes container e bg-warning ao body

    f) Definir um título h1 com o texto "Usuários de Teste via REST"

    g) Acrescentar uma referência ao site reqres.in, responsável por fornecer os
dados de teste, no formato JSON, de forma gratuita

    h) Incluir uma div com a identificação usuarios e classe CSS container-fluid

    i) Na div de usuários incluir uma div com a classe row, representando uma
linha de exibição para os painéis de usuários

    j) No corpo da segunda div, acrescentar uma div para o painel de usuário,
formatada como card, exibição em 3 colunas, espaçamento interno p-2 e
tamanho da margem como m-3

    k) Acrescentar um atributo de repetição v-for, do VUE JS, baseado na regra
(user,index) in users, e um atributo :key, relacionado ao index

    l) No interior do card, definir uma imagem, formatada como card-img-top,
tendo a origem definida via :src, do VUE JS, com valor user.avatar

    m) Definir uma div para o corpo do painel, formatado como card-body

    n) Acrescentar um título ao corpo do painel, formatado como card-title, e
usando os valores {{user.first_name}} e {{user.last_name}}

    o) Acrescentar um parágrafo ao corpo do painel, formatado como card-text,
tendo com conteúdo {{user.email}}

    p) Definir um trecho Java Script para a definição do objeto VUE JS

Implemente o objeto de controle VUE JS:
    a) Definir um objeto app, do tipo Vue

    b) Configurar o elemento alvo (el) como #usuarios, relacionado ao painel
principal, utilizado como container

    c) Configurar o atributo de dados (data) como uma função retornando o vetor
users, inicialmente vazio

    d) Configurar o evento mounted, com a chamada para loadUsers, visando o
preenchimento do vetor users, utilizado como fonte de dados e na regra de
repetição para os painéis

    e) Configurar o atributo methods, contendo a função loadUsers

    f) Implementar a função loadUsers para preenchimento do vetor users com
os dados JSON fornecidos por https://reqres.in/api/users?per_page=10,
podendo ser utilizado JQuery AJAX, XMLHttpRequest ou Fetch API

Ajuste as características para obter uma página como o exemplo abaixo:

![image](https://github.com/msbzz/estacio.m2.n2/assets/44148209/5ef6db22-f75a-47c2-823a-15d18b70b613)


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
