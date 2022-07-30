import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {

  nombreLower: string = 'claudio';
  nombreUpper: string = 'CLAUDIO';
  nombreCompleto: string = 'ClAudiO hEnriQueS'

  fecha: Date = new Date(); //Fecha actual

}
