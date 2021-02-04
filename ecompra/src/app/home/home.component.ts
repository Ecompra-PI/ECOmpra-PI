import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPromo: Produto[]
  i: number
  

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(){
    this.promo()
  }

  promo(){
    this.produtoService.getProdutoPromocao().subscribe((resp : Produto[])=>{
      this.listPromo = resp
      this.i = this.listPromo.length
    })
  }

}