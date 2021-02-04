import { AlertsComponent } from './../alerts/alerts.component';
import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private alertas(message: string, tipo: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)
    bsModalRef.content.type = tipo
    bsModalRef.content.message = message

  }

  showAlertSuccess(message: string){
    this.alertas(message, 'success')

  }
}
