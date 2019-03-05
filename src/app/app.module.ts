import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// HTTP
import { HttpClientModule } from '@angular/common/http'; 


// Componentes
import { GestionComponent } from './gestion/gestion.component';
import { GenerarComponent } from './estadistica/generar/generar.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TituloComponent } from './titulo/titulo.component';
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
import { REliminarComponent } from './rol/r-eliminar/r-eliminar.component';
import { RIngresarComponent } from './rol/r-ingresar/r-ingresar.component';
import { RModificarComponent } from './rol/r-modificar/r-modificar.component';
import { SEliminarComponent } from './sucursal/s-eliminar/s-eliminar.component';
import { SIngresarComponent } from './sucursal/s-ingresar/s-ingresar.component';
import { SModificarComponent } from './sucursal/s-modificar/s-modificar.component';

// Services
import { PedidosComponent } from './pedidos/pedidos.component';
import { TNuevoComponent } from './pedidos/t-nuevo/t-nuevo.component';
import { TPreparadoComponent } from './pedidos/t-preparado/t-preparado.component';
import { TFacturadoComponent } from './pedidos/t-facturado/t-facturado.component';
import { TRetiradoComponent } from './pedidos/t-retirado/t-retirado.component';
import { LogOnComponent } from './log-on/log-on.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    GenerarComponent,
    LogInComponent,
    SignInComponent,
    TituloComponent,
    InicioComponent,
    PageFoundComponent,
    CCrearComponent,
    CActualizarComponent,
    CEliminarComponent,
    DCrearComponent,
    DActualizarComponent,
    DEliminarComponent,
    MActualizarComponent,
    MConsultaComponent,
    MCrearComponent,
    MEliminarComponent,
    MListaComponent,
    REliminarComponent,
    RIngresarComponent,
    RModificarComponent,
    SEliminarComponent,
    SIngresarComponent,
    SModificarComponent,
    PedidosComponent,
    TNuevoComponent,
    TPreparadoComponent,
    TFacturadoComponent,
    TRetiradoComponent,
    LogOnComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
