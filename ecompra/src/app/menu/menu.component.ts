import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  imglog = environment.imglogo
  cadastro: boolean


  constructor() { }

  ngOnInit() {
  }

  administrador(){
    let aparecer: boolean = false

    if(environment.tipoUsuario == 'administrador'){
      aparecer = true
    }
    return aparecer
  }


}
