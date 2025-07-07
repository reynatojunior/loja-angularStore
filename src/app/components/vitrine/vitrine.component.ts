import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProdutosService } from '../../services/produtos.service';



@Component({
  selector: 'app-vitrine',
  imports: [HeaderComponent],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})
export class VitrineComponent implements OnInit{

  constructor(public produtosService: ProdutosService){}

  ngOnInit(): void {
    console.log("sdhsudhsuhdus");
    console.log(this.produtosService.produtos);
  }



}
