import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';

import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../service/produto.service';
import { AlertsService } from '../service/alerts.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produto = new Produto
  
  listProdutos: Produto[]

  categoria: Categoria = new Categoria
  listaCategoria: Categoria[]

  promo: string
  promoExibe: string
  promoFinal: boolean
  idCat: number
  categoriaProduto: Categoria

  nomeCat: string 
  descricaoCat: string
  setorCat: string

  nomeProd: string
  precoProd: number
  descricaoProd: string
  quantidadeProd: number
  promocaoProd: string
  categoriaProd: number
  fotoProd: string

  constructor (
    private router: Router,
    private categriaService: CategoriaService,
    private produtoService: ProdutoService,
    private alerta: AlertsService

  ) {}

  ngOnInit() {
    environment.paginaAtual = "admin"

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.findAllCadastrar()
    this.findAllProdutos()
  }

  validaNomeCat(event: any){
    this.nomeCat = event.target.value
  }

  validaDescricaoCat(event: any){
    this.descricaoCat = event.target.value
  }

  validaSetorCat(event: any){
    this.setorCat = event.target.value
  }

  validaNomeProd(event: any){
    this.nomeProd = event.target.value
  }
  validaDescricaoProd(event: any){
    this.descricaoProd = event.target.value
  }
  validaPrecoProd(event: any){
    this.precoProd = event.target.value
  }
  validaQuantidadeProd(event: any){
    this.quantidadeProd = event.target.value
  }
  validaPromocaoProd(event: any){
    this.promocaoProd = event.target.value
  }
  validaCategoriaProd(event: any){
    this.categoriaProd = event.targe.value
  }
  validaFotoProd(event: any){
    this.fotoProd = event.target.value
  }


  validaPromo(event: any){
    this.promo = event.target.value
    if(this.promo == "true"){
      this.promoFinal = true
    }else{
      this.promoFinal = false
    }
  }

  findAllCadastrar(){
    this.categriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  findByIdCategoria(){
    this.categriaService.getByIdCategoria(this.idCat).subscribe((resp: Categoria) => {
      this.categoriaProduto = resp
    })
  }

  cadastrar(){
    if(this.nomeCat == null || this.descricaoCat == null || this.setorCat == null || this.nomeCat == '' || this.descricaoCat == '' || this.setorCat == ''){
      alert('Preencha todos os campos para cadastrar um produto!')
    }else{
      this.categoria.nome = this.nomeCat
      this.categoria.descricao = this.descricaoCat
      this.categoria.setor = this.setorCat

      this.nomeCat = ''
      this.descricaoCat = ''
      this.setorCat = ''

      this.categriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=> {
        this.categoria = resp 
        this.alerta.showAlertSuccess('Categoria Cadastrada com sucesso!')

        this.findAllCadastrar()
        this.categoria = new Categoria()
      })
    }
  }

  findAllProdutos(){
    this.produtoService.getAllProduto().subscribe((resp: Produto[]) => {
      this.listProdutos = resp
    })
  }

  cadastrarProduto(){ 

    console.log(this.idCat)
    console.log(this.nomeProd)
    console.log(this.descricaoProd)
    console.log(this.precoProd)
    console.log(this.quantidadeProd)
    console.log(this.promocaoProd)
    console.log(this.fotoProd)

    if(this.idCat == null || this.nomeProd == null || this.descricaoProd == null || this.precoProd == null || this.quantidadeProd == null || this.promocaoProd == null || this.fotoProd == null){
      alert('Preencha todos os campos para cadastrar um produto!')
    }else{
      this.categoriaProduto.codigo = this.idCat
    
      this.produto.categoria = this.categoriaProduto
      this.produto.promocao = this.promoFinal
      
      this.produtoService.postProduto(this.produto).subscribe((resp: Produto) => {
        this.produto = resp
        alert("Produto cadastrado com sucesso!")
        this.findAllProdutos()
        this.produto = new Produto()
  
      })
    }
  }

}