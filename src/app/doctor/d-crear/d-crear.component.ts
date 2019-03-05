import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-d-crear',
  templateUrl: './d-crear.component.html',
  styleUrls: ['./d-crear.component.css']
})
export class DCrearComponent implements OnInit {

  constructor( private doctorService: DoctorService) {
  }
  lastName = '';
  name = '';

  getDoctor(id : string) { // Poner atributo de entrada y pasar luego aqui abajo
    this.doctorService.get(id)
      .subscribe(doctor => {        
        this.lastName = doctor.Lastname;
        this.name = doctor.Name;                
        console.log(doctor);       
      });
  }

  createDoctor(numeroCedula: string, nombre: string, apellido: string, lugarResidencia: string, fechaNacimiento: string) {
    const doctor = {
      ID: numeroCedula,
      Name: nombre,
      Lastname: apellido,
      Address: lugarResidencia,
      Birthday: fechaNacimiento
    };
    console.log(doctor);
    this.doctorService.create(doctor).subscribe((newDoctor) => {console.log(newDoctor);
    });
  }

  
  getAllTasks() {
    this.doctorService.getAll()
      .subscribe(tasks => {
        console.log(tasks);
      });
  }

  updateDoctor() {
    const doctor = {
      ID: '301150921',
      Name: 'Maria',
      Lastname: 'Lopez',
      Address: 'Colombia',
      Birthday: '12-04-1991',
      PhoneNumber: '',
      MedicalHistory: 'Es una mujer desconocida',
      Password: 'admin',
    };
    this.doctorService.update(doctor)
      .subscribe(todo => {
        console.log(todo);
      });
  }

  deleteCliente(nc: string) {
    this.doctorService.delete(nc)
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnInit() {
    this.lastName = '';
    this.name = '';
  }

}
