import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CargarDatosPage } from './cargar-datos';

@NgModule({
  declarations: [
    CargarDatosPage,
  ],
  imports: [
    IonicPageModule.forChild(CargarDatosPage),
  ],
})
export class CargarDatosPageModule {}
