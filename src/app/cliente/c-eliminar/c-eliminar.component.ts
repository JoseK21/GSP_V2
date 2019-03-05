import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-c-eliminar',
  templateUrl: './c-eliminar.component.html',
  styleUrls: ['./c-eliminar.component.css']
})
export class CEliminarComponent implements OnInit {

  constructor( private clienteService: ClientService) {
  }
  lastName = '';
  name = '';

  getCliente(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.clienteService.getCliente(id)
      .subscribe(client => {        
        this.lastName = client.Lastname;
        this.name = client.Name;                
        console.log(client);       
      });
  }
  ngOnInit() {
    this.lastName = '';
    this.name = '';
  }

}
