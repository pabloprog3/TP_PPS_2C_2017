import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { MateriasPage } from '../pages/materias/materias';
import { MateriaPrincipalPage } from '../pages/materia-principal/materia-principal';
import { PersonasPage } from '../pages/personas/personas';
import {PerfilPage} from '../pages/perfil/perfil';
import {EncuestaPage} from '../pages/encuesta/encuesta';
import {AsistenciasPage} from '../pages/asistencias/asistencias';
import { MostrarAsistenciasPage } from "../pages/mostrar-asistencias/mostrar-asistencias";
import { ProfesorAsistenciaPage } from "../pages/profesor-asistencia/profesor-asistencia";

import { Push, PushObject, PushOptions } from '@ionic-native/push';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('contenidoPrincipal') main: Nav;
  rootPage:any = LoginPage;

  public pages: Array<{titulo: string, component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              public push:Push, public alertCtrl:AlertController)

 {

    this.pages = [
        {titulo: 'Inicio', component:LoginPage},
        {titulo: 'Perfil', component:PerfilPage},
        {titulo: 'Asistencias', component:AsistenciasPage},
        {titulo: 'Encuesta', component:EncuestaPage}


    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushConfig();
    });
  }


  irPagina(pagina){
    this.main.setRoot(pagina);
  }


  pushConfig(){
    const options: any = {
      android: {
        senderID: '566483132157',
        sound:true,
        icon:'assets/icon/favicon',
        clearBadge:true,
        vibrate:true
      },
      ios: {
          alert: 'true',
          badge: true,
          sound: 'false'
      },
      windows: {},
      browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
   };

   const pushObject: PushObject = this.push.init(options);

   pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

   pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  }


}

