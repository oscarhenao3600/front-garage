import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContainerLoginComponent} from './components/container-login/container-login.component';
import {ContainerMenuMecanicoComponent} from './components/container-menu-mecanico/container-menu-mecanico.component';
import {ContainerDetallesReparacionComponent} from './components/container-detalles-reparacion/container-detalles-reparacion.component';
import {ContainerHistorialComponent} from './components/container-historial/container-historial.component';
import {ContainerListaReparacionesComponent} from './components/container-lista-reparaciones/container-lista-reparaciones.component';
import { ContainerMenuAdministradorComponent } from './components/container-menu-administrador/container-menu-administrador.component';
import { ContainerIngresoVehiculoComponent } from './components/container-ingreso-vehiculo/container-ingreso-vehiculo.component';
import { ContainerListaMecanicosComponent } from './components/container-lista-mecanicos/container-lista-mecanicos.component';
import { ContainerConsultaMecanicoComponent } from './components/container-consulta-mecanico/container-consulta-mecanico.component';
import { ContainerCrearMecanicoComponent } from './components/container-crear-mecanico/container-crear-mecanico.component';
import { ContainerModificarMecanicoComponent } from './components/container-modificar-mecanico/container-modificar-mecanico.component';
import { ContainerListCustomerComponent } from './components/container-list-customer/container-list-customer.component';
import { ContainerCreateCustomerComponent } from './components/container-create-customer/container-create-customer.component';
import { ContainerQueryCustomerComponent } from './components/container-query-customer/container-query-customer.component';
import { ContainerModifyCustomerComponent } from './components/container-modify-customer/container-modify-customer.component';
import { ContainerMainReceptionComponent } from './components/container-main-reception/container-main-reception.component';

const routes: Routes = [

  {path:'', component: ContainerLoginComponent},
  {path:'mecanico', component: ContainerMenuMecanicoComponent},
  {path:'detallesReparacion', component: ContainerDetallesReparacionComponent},
  {path:'historial', component: ContainerHistorialComponent},
  {path:'listaReparacion', component: ContainerListaReparacionesComponent},
  {path:'administrador', component: ContainerMenuAdministradorComponent},
  {path:'ingresoVehiculo', component: ContainerIngresoVehiculoComponent},
  {path:'listaMecanicos', component: ContainerListaMecanicosComponent},
  {path:'consultaMecanico', component: ContainerConsultaMecanicoComponent},
  {path:'crearMecanico', component: ContainerCrearMecanicoComponent},
  {path:'modificarMecanico', component: ContainerModificarMecanicoComponent},
  {path:'listCustomer', component: ContainerListCustomerComponent},
  {path:'createCustomer', component: ContainerCreateCustomerComponent},
  {path:'queryCustomer', component: ContainerQueryCustomerComponent},
  {path:'modifyCustomer', component: ContainerModifyCustomerComponent},
  {path:'mainReception', component: ContainerMainReceptionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
