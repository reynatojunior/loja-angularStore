import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor() {}

  produtos = [
    {
      id: 1,
      nome: 'Angular',
      descricao:
        'Angular é um framework front-end desenvolvido pelo Google para criar aplicações web dinâmicas e escaláveis usando TypeScript. Ele oferece recursos como data binding, injeção de dependência e componentes reutilizáveis.',
      imagem: '/images/products/angular.png',
    },
    {
      id: 2,
      nome: 'React',
      descricao:
        'React é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário interativas e componentizadas. Ele utiliza um DOM virtual para renderização eficiente e permite o desenvolvimento de SPAs (Single-Page Applications).',
      imagem: '/images/products/react.png',
    },
    {
      id: 3,
      nome: 'Html',
      descricao:
        'HTML (HyperText Markup Language) é a linguagem padrão para criar e estruturar páginas web, definindo elementos como textos, imagens e links. Ele forma a base do desenvolvimento front-end, sendo interpretado pelos navegadores para exibir conteúdo.',
      imagem: '/images/products/html.png',
    },
    {
      id: 4,
      nome: 'CSS',
      descricao:
        'CSS (Cascading Style Sheets) é uma linguagem usada para estilizar páginas HTML, controlando layout, cores, fontes e outros aspectos visuais. Ele separa o design do conteúdo, permitindo designs responsivos e consistentes.',
      imagem: '/images/products/css.png',
    },
    {
      id: 5,
      nome: 'VsCode',
      descricao:
        'VS Code (Visual Studio Code) é um editor de código leve e poderoso da Microsoft, com suporte a diversas linguagens, extensões e ferramentas integradas como debugger e Git. Ele é multiplataforma, altamente personalizável e ideal para desenvolvimento moderno.',
      imagem: '/images/products/vscode.png',
    },
    {
      id: 6,
      nome: 'Github',
      descricao:
        'VS Code (Visual Studio Code) é um editor de código leve e poderoso da Microsoft, com suporte a diversas linguagens, extensões e ferramentas integradas como debugger e Git. Ele é multiplataforma, altamente personalizável e ideal para desenvolvimento moderno.',
      imagem: '/images/products/github.png',
    },
  ];
}
