import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent implements OnInit {
  title = 'GasStationPharmacyPublic';
  work = '';
  constructor(
    private clienteService: ClientService
  ) {}

  ngOnInit() {
  }

  createCliente(numeroCedula: string, nombre: string, apellido: string, lugarResidencia: string, 
    fechaNacimiento: string, tel: string, historial: string, cContrasena: string , pharmacy:string, rol:string) {
    const cliente = {
      ID: numeroCedula,
      Name: nombre,
      Lastname: apellido,
      Address: lugarResidencia,
      Birthday: fechaNacimiento,
      PhoneNumber: tel,
      MedicalHistory: historial,
      Password: cContrasena,
      Pharmacy:pharmacy,
      Rol:rol,
    };
    console.log(cliente);
    this.clienteService.createCliente(cliente).subscribe((newCliente) => {console.log(newCliente);
    });
  }

  
  getAllTasks() {
    this.clienteService.getAllCliente()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  updateCliente() {
    const cliente = {
      ID: '301150921',
      Name: 'Maria',
      Lastname: 'Lopez',
      Address: 'Colombia',
      Birthday: '12-04-1991',
      PhoneNumber: '0',
      MedicalHistory: 'Es una mujer desconocida',
      Password: 'admin',
    };
    this.clienteService.updateCliente(cliente)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteCliente(nc: string) {
    this.clienteService.deleteCliente(nc)
      .subscribe((data) => {
        console.log(data);
      });
  }
  
  checkNewUser(value: string, value2: string, value3: string, value4: string, checked: boolean, checked2: boolean, checked3: boolean) {

    if (value === '' || value2 === '' || value3 === '' || value4 === '') {
      alert('Espacios imcompletos');
    } else {

      if (checked.valueOf()) {
        this.work = 'Gerente';
      } else if (checked2.valueOf()) {
        this.work = 'Dependiente';
      } else if (checked3.valueOf()) {
        this.work = 'Farmacéutico';
      }
      alert('Bienvenid@ ' + value + ' su perfil a sido creado exitosamente! ! \n' + this.work.toUpperCase());

      console.log(value + value2 + value3 + value4);
    }
  }
}
