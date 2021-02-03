import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { CategoriaService } from 'src/app/service/categoria.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-deletar',
  templateUrl: './editar-deletar.component.html',
  styleUrls: ['./editar-deletar.component.css']
})
export class EditarDeletarComponent implements OnInit {

  
  categoria: Categoria = new Categoria
  codigoCategoria: number
  nomeAntigo: string
  descricaoAntiga: string
  setorAntigo: string
  
  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let codigo = this.route.snapshot.params['codigo']
    this.findByIdCategoria(codigo)

    this.codigoCategoria = this.route.snapshot.params['codigo']
    this.findByIdCategoria(this.codigoCategoria)
  }

  findByIdCategoria(codigo: number){
    this.categoriaService.getByIdCategoria(codigo).subscribe((resp: Categoria) =>{
    this.categoria = resp 
    this.nomeAntigo = this.categoria.nome
    this.descricaoAntiga = this.categoria.descricao
    this.setorAntigo = this.categoria.setor
    })
  }

  atualizar(){
    this.categoriaService.putCategoria(this.categoria).subscribe((resp: Categoria) =>{
      this.categoria = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/admin'])
    })
  }

  apagar(){
    this.categoriaService.deleteCategoria(this.codigoCategoria).subscribe(()=>{
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/admin'])
    })
  }
}