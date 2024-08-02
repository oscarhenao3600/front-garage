import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MenuMecanicoComponent } from './components/menu-mecanico/menu-mecanico.component';
import { ContainerMenuMecanicoComponent } from './components/container-menu-mecanico/container-menu-mecanico.component';
import { LoginComponent } from './components/login/login.component';
import { ContainerLoginComponent } from './components/container-login/container-login.component';
import { ContainerListaReparacionesComponent } from './components/container-lista-reparaciones/container-lista-reparaciones.component';
import { ListaReparacionesComponent } from './components/lista-reparaciones/lista-reparaciones.component';
import { ContainerDetallesReparacionComponent } from './components/container-detalles-reparacion/container-detalles-reparacion.component';
import { DetallesReparacionComponent } from './components/detalles-reparacion/detalles-reparacion.component';
import { ContainerHistorialComponent } from './components/container-historial/container-historial.component';
import { HistorialComponent } from './components/historial/historial.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { ContainerMenuAdministradorComponent } from './components/container-menu-administrador/container-menu-administrador.component';
import { ContainerIngresoVehiculoComponent } from './components/container-ingreso-vehiculo/container-ingreso-vehiculo.component';
import { IngresoVehiculoComponent } from './components/ingreso-vehiculo/ingreso-vehiculo.component';
import { ListaMecanicosComponent } from './components/lista-mecanicos/lista-mecanicos.component';
import { ContainerListaMecanicosComponent } from './components/container-lista-mecanicos/container-lista-mecanicos.component';
import { ContainerConsultaMecanicoComponent } from './components/container-consulta-mecanico/container-consulta-mecanico.component';
import { ConsultaMecanicoComponent } from './components/consulta-mecanico/consulta-mecanico.component';
import { ContainerModificarMecanicoComponent } from './components/container-modificar-mecanico/container-modificar-mecanico.component';
import { ModificarMecanicoComponent } from './components/modificar-mecanico/modificar-mecanico.component';
import { ContainerCrearMecanicoComponent } from './components/container-crear-mecanico/container-crear-mecanico.component';
import { CrearMecanicoComponent } from './components/crear-mecanico/crear-mecanico.component';
import { ContainerListCustomerComponent } from './components/container-list-customer/container-list-customer.component';
import { ListCustomerComponent } from './components/list-customer/list-customer.component';
import { ContainerQueryCustomerComponent } from './components/container-query-customer/container-query-customer.component';
import { QueryCustomerComponent } from './components/query-customer/query-customer.component';
import { ContainerModifyCustomerComponent } from './components/container-modify-customer/container-modify-customer.component';
import { ModifyCustomerComponent } from './components/modify-customer/modify-customer.component';
import { ContainerCreateCustomerComponent } from './components/container-create-customer/container-create-customer.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { ContainerMainReceptionComponent } from './components/container-main-reception/container-main-reception.component';
import { MainReceptionComponent } from './components/main-reception/main-reception.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuMecanicoComponent,
    ContainerMenuMecanicoComponent,
    LoginComponent,
    ContainerLoginComponent,
    ContainerListaReparacionesComponent,
    ListaReparacionesComponent,
    ContainerDetallesReparacionComponent,
    DetallesReparacionComponent,
    ContainerHistorialComponent,
    HistorialComponent,
    MenuAdministradorComponent,
    ContainerMenuAdministradorComponent,
    ContainerIngresoVehiculoComponent,
    IngresoVehiculoComponent,
    ListaMecanicosComponent,
    ContainerListaMecanicosComponent,
    ContainerConsultaMecanicoComponent,
    ConsultaMecanicoComponent,
    ContainerModificarMecanicoComponent,
    ModificarMecanicoComponent,
    ContainerCrearMecanicoComponent,
    CrearMecanicoComponent,
    ContainerListCustomerComponent,
    ListCustomerComponent,
    ContainerQueryCustomerComponent,
    QueryCustomerComponent,
    ContainerModifyCustomerComponent,
    ModifyCustomerComponent,
    ContainerCreateCustomerComponent,
    CreateCustomerComponent,
    ContainerMainReceptionComponent,
    MainReceptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
