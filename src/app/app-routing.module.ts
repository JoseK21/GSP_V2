import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// gestion-inicio-logIn-pageFound-signIn-titulo
import { GestionComponent } from './gestion/gestion.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageFoundComponent } from './page-found/page-found.component';


import { CCrearComponent } from './cliente/c-crear/c-crear.component';
import { CActualizarComponent } from './cliente/c-actualizar/c-actualizar.component';
import { CEliminarComponent } from './cliente/c-eliminar/c-eliminar.component';
import { DCrearComponent } from './doctor/d-crear/d-crear.component';
import { DActualizarComponent } from './doctor/d-actualizar/d-actualizar.component';
import { DEliminarComponent } from './doctor/d-eliminar/d-eliminar.component';
import { MActualizarComponent } from './medicamentos/m-actualizar/m-actualizar.component';
import { MConsultaComponent } from './medicamentos/m-consulta/m-consulta.component';
import { MCrearComponent } from './medicamentos/m-crear/m-crear.component';
import { MEliminarComponent } from './medicamentos/m-eliminar/m-eliminar.component';
import { MListaComponent } from './medicamentos/m-lista/m-lista.component';
import { GenerarComponent } from './estadistica/generar/generar.component';
import { REliminarComponent } from './rol/r-eliminar/r-eliminar.component';
import { RIngresarComponent } from './rol/r-ingresar/r-ingresar.component';
import { RModificarComponent } from './rol/r-modificar/r-modificar.component';
import { SEliminarComponent } from './sucursal/s-eliminar/s-eliminar.component';
import { SIngresarComponent } from './sucursal/s-ingresar/s-ingresar.component';
import { SModificarComponent } from './sucursal/s-modificar/s-modificar.component';
import {PedidosComponent} from './pedidos/pedidos.component';
import {TNuevoComponent} from './pedidos/t-nuevo/t-nuevo.component';
import {TFacturadoComponent} from './pedidos/t-facturado/t-facturado.component';
import {TPreparadoComponent} from './pedidos/t-preparado/t-preparado.component';
import {TRetiradoComponent} from './pedidos/t-retirado/t-retirado.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogOnComponent } from './log-on/log-on.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  // Cliente
  { path: 'cliente/c-crear', component: CCrearComponent },
  { path: 'cliente/c-actualizar', component: CActualizarComponent },
  { path: 'cliente/c-eliminar', component: CEliminarComponent },
  // Doctor
  { path: 'doctor/d-crear', component: DCrearComponent },
  { path: 'doctor/d-actualizar', component: DActualizarComponent },
  { path: 'doctor/d-eliminar', component: DEliminarComponent },
  // Estadistica
  { path: 'estadistica/generar', component: GenerarComponent },
  // Gestion
  { path: 'gestion', component: GestionComponent },
  // Inicio
  { path: 'inicio', component: InicioComponent },
  // Medicamentos
  { path: 'medicamentos/m-actualizar', component: MActualizarComponent },
  { path: 'medicamentos/m-consulta', component: MConsultaComponent },
  { path: 'medicamentos/m-crear', component: MCrearComponent },
  { path: 'medicamentos/m-eliminar', component: MEliminarComponent },
  { path: 'medicamentos/m-lista', component: MListaComponent },
  // PageNotFound
  { path: 'pageNotFound', component: PageFoundComponent },
  // Sign-In
  { path: 'sign-in', component: SignInComponent },
  // Log-On
  { path: 'log-on', component: LogOnComponent },
  // Rol
  { path: 'rol/r-eliminar', component: REliminarComponent },
  { path: 'rol/r-ingresar', component: RIngresarComponent },
  { path: 'rol/r-modificar', component: RModificarComponent },
  // Sucursal
  { path: 'sucursal/s-eliminar', component: SEliminarComponent },
  { path: 'sucursal/s-ingresar', component: SIngresarComponent },
  { path: 'sucursal/s-modificar', component: SModificarComponent },

  // Pedidos
  {path: 'pedidos', component: PedidosComponent},
  {path: 'pedidos/t-nuevo', component: TNuevoComponent},
  {path: 'pedidos/t-facturado', component: TFacturadoComponent},
  {path: 'pedidos/t-preparado', component: TPreparadoComponent},
  {path: 'pedidos/t-retirado', component: TRetiradoComponent},

  // Error Page Not Found
  { path: '**', pathMatch: 'full', redirectTo: 'pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
