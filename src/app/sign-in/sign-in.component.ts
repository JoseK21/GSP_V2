import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  work = '';
  rol = '';
  farmacia = '';
  
  ngOnInit() {  }

  constructor(private clienteService: ClientService) {}

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

  setFarmacia(f:string) {
    this.farmacia = f;
    console.log(f);
  }

  setRol(r:string){
    this.rol = r;
    console.log(r);
  }

}
