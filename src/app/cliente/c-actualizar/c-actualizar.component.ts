import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-c-actualizar',
  templateUrl: './c-actualizar.component.html',
  styleUrls: ['./c-actualizar.component.css']
})
export class CActualizarComponent implements OnInit {

  
  constructor( private clienteService: ClientService) {
  }

  address = '';
  birthday = '';
  id = '';
  lastName = '';
  medicalH = '';
  name = '';
  phone = '';

  getCliente(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.clienteService.getCliente(id)
      .subscribe(client => {
        
        this.address = client.Address;
        this.birthday = client.Birthday;
        this.id = client.ID;
        this.lastName = client.Lastname;
        this.medicalH = client.MedicalHistory;
        this.name = client.Name;
        this.phone = client.PhoneNumber;
                
        console.log(client);       
      });
  }
  ngOnInit() {
    this.address = '';
    this.birthday = '';
    this.id = '';
    this.lastName = '';
    this.medicalH = '';
    this.name = '';
    this.phone = '';
  }


}
