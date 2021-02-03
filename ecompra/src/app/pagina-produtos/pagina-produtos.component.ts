import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent implements OnInit {

  listaProdutos: Produto[]
  listaCatProd: Produto[]

  idCat: number

  listaCategorias: Categoria[]
  categoria: Categoria

  constructor(
    private produtosService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit(){
    this.getAllProdutos()
    this.getAllCategoria()
  }

  getAllProdutos(){
    this.produtosService.getAllProduto().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  getAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategorias = resp
    })
  }

  findByIdCategoria(id:number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
      this.categoria = resp
      this.listaCatProd = this.categoria.produto
      console.log(this.listaCatProd)
    })
  }

}
