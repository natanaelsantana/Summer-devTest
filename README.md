![banner](.imgs/banner.png)

<br />

## Resumo
O teste consiste basicamente em criar uma página web (porta: 3000) que se comunique com uma API (porta: 3001), e assim consumir os dados para gerar uma página para que os usuários possam consultar e adquirir os produtos.

## Durante o Desenvolvimento
O uso de frameworks CSS é livre, e também deixamos a critério do desenvolvedor decidir se irá usar Axios ou Fetch. Será analisada a lógica de programação do desenvolvedor, portanto, adotar as práticas de Clean Code será um diferencial. Como uma empresa que zela por manter códigos organizados e limpos, separamos algumas dicas:
1. Evitar o uso de `let` ou `var`;
2. Adotar sempre que possível `Arrow Functions`;
3. Functions podem ser usadas diversas vezes;
4. Evitar o uso de `Ifs` e `Elses` (Valorizamos desenvolvedores que têm conhecimento em múltiplas formas de validação).

No diretório Frontend ja deixamos pronto o seu `Dockerfile` para configurar sua imagem e deixamos comentado no `Docker Compose` a criação do container do Front da aplicação.

Sabemos que, às vezes, as ideias de layout de Página Web podem ser um desafio. Por isso, resolvemos disponibilizar algo que esperamos:

![exemple](.imgs/exemple.png)

Entretanto, nossa satisfação será ainda maior caso você nos apresente a sua própria solução.

**ATENÇÃO! Consideramos, e inclusive fazemos o uso do ChatGPT para pesquisas rápidas. Porém, cuidado com o uso excessivo, pois conversaremos mais sobre o código que nos será entregue.**

## Stacks:
### Requisitos para o teste:
- JavaScript com o uso de ReactJs
- Conhecimento basico de NodeJs
- Docker
- Ciclo de vida
- Git

### Desejável:
- PHP
- CSS
- Frameworks de CSS:
  - Bootstrap
  - Tailwind
- GitHub workflow
- Kanban

<hr />

### Iniciando o Projeto
1. Clone o projeto:
```
git clone git@github.com:Summer-Developer-Team/Test-Dev-Jr.git
```
2. Entre no diretório e instale as dependências:
```
cd Test-Dev-Jr && npm install
```
3. Suba a API
```
npm rum compose
```

<hr />

### EndPoints:
### Get All Products
```
product/
```
### Get Products by ID 
```
product/id
```
### Get Products by Name
```
product/search?q=<str_to_search>
```
