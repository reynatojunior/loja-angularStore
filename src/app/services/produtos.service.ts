import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }



  produtos = [
    { id: 1, nome: 'Angular', preco: 500},
    { id: 2, nome: 'React', preco: 400 },
    { id: 3, nome: 'Html', preco: 300 },
    { id: 4, nome: 'Css', preco: 200},
    { id: 5, nome: 'VsCode', preco: 100 },
    { id: 6, nome: 'Github', preco: 50}
  ];
}
