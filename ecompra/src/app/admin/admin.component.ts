<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { CategoriaService } from './../service/categoria.service';
import { Router } from '@angular/router';

import { Categoria } from './../model/Categoria';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
>>>>>>> f5803ae4f04928d9ab766b09bd478b3bf39e766e

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  categoria: Categoria = new Categoria
  listaCategoria: Categoria[]
  constructor (
    private router: Router,
    private categriaService: CategoriaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
  }

  cadastrar(){
    this.categriaService.postCategoria(this.categoria).subscribe((resp: Categoria)=> {
      this.categoria = resp 
      alert('Categoria Cadastrada com sucesso!')
      this.categoria = new Categoria()
    })
>>>>>>> f5803ae4f04928d9ab766b09bd478b3bf39e766e
  }

}
