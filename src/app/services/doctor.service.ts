import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Doctor } from '../interface/doctor';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private api = 'http://localhost:65436/doctors';
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    const path = `${this.api}/`;
    return this.http.get<Doctor[]>(path);
  }
  //Get Doctor
  get(id: string) {
    const path = `${this.api}/${id}`;
    return this.http.get<Doctor>(path);
  }
  //Create Doctor
  create(doctor: Doctor) {
    console.log('>>>>' + doctor)
    const path = `${this.api}/new`;
    return this.http.post(path, "'" + JSON.stringify(doctor) + "'", httpOptions);
  }
//Update Doctor
  update(doctor: Doctor) {
    const path = `${this.api}/${doctor.ID}`;
    return this.http.put<Doctor>(path, "'" + JSON.stringify(doctor) + "'");
  }
//Delete Doctor
  delete(id: string) {
    console.log('>>>>' + id)
    const path = `${this.api}/delete/${id}`;
    return this.http.delete(path);
  }
}