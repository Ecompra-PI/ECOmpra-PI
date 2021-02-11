import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/Produto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../service/alerts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listPromo: Produto[]
  produto: Produto

  idProduto: number
  nomeProduto: string
  descricaoProduto: string
  precoProduto: number
  quantidadeProduto: number
  promocaoProduto: boolean
  categoriaProduto: string
  fotoProduto: string 

  validaCompra: string

  constructor(
    private produtoService: ProdutoService,
    private alertas: AlertsService
  ) { }

  ngOnInit(){
    this.promo()
  }

  promo(){
    this.produtoService.getProdutoPromocao().subscribe((resp : Produto[])=>{
      this.listPromo = resp
    })
  }

  getProdutoById(id: number){
    return this.produtoService.getProdutoById(id).subscribe((resp: Produto) => {
      this.produto = resp

      this.idProduto = this.produto.codigo
      this.nomeProduto = this.produto.nome
      this.descricaoProduto = this.produto.descricao
      this.precoProduto = this.produto.preco
      this.quantidadeProduto = this.produto.quantidade
      this.promocaoProduto = this.produto.promocao
      this.categoriaProduto = this.produto.categoria.descricao
      this.fotoProduto = this.produto.foto

    })
  }

  validarPagamento(pagamento: string){
    console.log(pagamento)
  }

  finalizarVenda(){

    if(this.validaCompra == "cartao"){
      this.alertas.showAlertInfo("Dados enviados para processamento! Em breve você reberá um email ;)")
    }else if(this.validaCompra == "boleto"){
      this.alertas.showAlertInfo("Em breve você reberá o boleto no seu um email!")
    }else{
      this.alertas.showAlertDanger("Selecione uma opção de pagamento!")
    }

  }

  compraRealizada(){
    this.alertas.showAlertSuccess("Transação processada! Em breve você reberá em seu email informações para finalizar a compra.")
  }

  assinaturaRealizada(){
    this.alertas.showAlertSuccess("Assinatura realizada com sucesso! Cadastre o endereço de entrega em seu perfil!")
  }

}