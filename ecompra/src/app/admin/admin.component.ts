
import { Component, OnInit } from '@angular/core';

import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor (
    private router: Router,
    private categriaService: CategoriaService
   
  ) { }


  ngOnInit() {
  // if(environment.token == ''){
  //   this.router.navigate(['/entrar'])
  // }

  }

  cadastrar(){
    this.categriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=> {
      this.categoria = resp 
      alert('Categoria Cadastrada com sucesso!')
      this.categoria = new Categoria()
    })

}
}