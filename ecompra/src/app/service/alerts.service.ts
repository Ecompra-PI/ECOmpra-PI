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

  private showAlertas(message: string, type: string) {
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertsComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = message


  }

  showAlertDanger(message: string) {
    this.showAlertas(message, 'danger')
  }

  showAlertSuccess(message: string) {
    this.showAlertas(message, 'success')

  }

  showAlertInfo(message: string){
    this.showAlertas(message, 'info')

  }

}
