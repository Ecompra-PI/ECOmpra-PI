import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';

import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produto = new Produto
  listProdutos: Produto[]

  categoriaValidacao: Categoria
  promocaoValida: string
  promocao: boolean

  categoria: Categoria = new Categoria
  listaCategoria: Categoria[]

  constructor (
    private router: Router,
    private categriaService: CategoriaService,
    private produtoService: ProdutoService

  ) {}

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.findAllCadastrar()
    this.findAllProdutos()
  }

  validacaoCategoria(event: any){
    this.categoriaValidacao.codigo = event.target.value
  }

  validacaoPromocao(event: any){
    this.promocaoValida = event.target.value
  }

  findAllCadastrar(){
    this.categriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  cadastrar(){
    this.categriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=> {
      this.categoria = resp 
      alert('Categoria Cadastrada com sucesso!')
      this.findAllCadastrar()
      this.categoria = new Categoria()
    })
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listProdutos = resp
    })
  }

  cadastrarProduto(){
    
    // if(this.categoriaValidacao.codigo == 0){
    //   alert('Selecione uma categoria')
    // }else{
      this.produto.codigo = this.categoriaValidacao.codigo
    // }

    // if(this.promocaoValida == "selecione"){
    //   alert('Selecione se o produto está em promoção')
    // }else{
    //   var promocao: boolean = false
    //   if(this.promocaoValida == "true"){
    //     promocao = true
    //   }
      this.produto.promocao = false
    // }

    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
      this.produto = resp
      alert("Produto cadastrado com sucesso!")
      this.findAllProdutos
      this.produto = new Produto()

    })
  }

  testeCadastro(){
    console.log(this.produto)
    console.log(this.produto.promocao)
    console.log(this.produto.categoria)
  }
}