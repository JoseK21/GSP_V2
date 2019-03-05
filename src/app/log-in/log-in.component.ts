import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  vista = '';
  password = '';
  id = '';

  constructor( private clienteService: ClientService) {
  }

  getCliente(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.clienteService.getCliente(id)   
      .subscribe(client => {
        this.password = client.Password;
        this.id = client.ID;
        console.log(client);
      });
  }
  ngOnInit() {
    this.password = '';
    this.id = '';
  }

  setAdmin() {
    this.vista = 'gestion';
    console.log('Ir a gestion');
  }
  setSuc() {
    this.vista = 'pedidos';
    console.log('Ir a sucursal');
  }
  showAlert(userN:string, passW:string) {
    if ( this.vista === '') {
      alert('Seleccione una Vista : Administrador/Sucursal');
    }
    }
}
