import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})

export class NoComunesComponent {

  //i18nSelect
  /* nombre: string = 'Susana';
  genero: string = 'femenino'; */
  nombre: string = 'Fernando';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'other': 'invitarle '
  }

  cambiarCliente() {
    if (this.nombre === 'Fernando') {
      this.nombre = 'Susana';
      this.genero = 'femenino'
    } else {
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Ana', 'Sofia', 'Camila'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
    /* 'other': 'tenemos ' + this.clientes.length + ' clientes esperando' */
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //Key Value Pipe
  persona = {
    nombre: 'Claudio',
    edad: 31,
    direccion: 'La Serena, Chile'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  //Async Pipe
  miObservable = interval(3000); //0, 1, 2, 3, 4

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
