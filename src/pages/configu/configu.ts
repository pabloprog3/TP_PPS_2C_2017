import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {LoginPage} from '../../pages/login/login';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-configu',
  templateUrl: 'configu.html',
})
export class ConfiguPage {

  fondo="fondoProfesional";
  boton="botonProfesional";
  boton1="botonProfesional1";
  titulo="tituloProfesional";
  logeo="admin@admin.com";
  estilo: FirebaseListObservable<any[]>;
  //temas: FirebaseListObservable<any>;
  
   

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public view:ViewController,
              private af: AngularFireDatabase
              ) {
              
              this.estilo = af.list('/estilo/');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguPage');
    this.logeo = this.navParams.get('logeo');
    
    
  }

  salir(){

    this.navCtrl.push(LoginPage,{'fondo':this.fondo,'boton':this.boton,'boton1':this.boton1,'titulo':this.titulo});
  }

  guardar(){
   
      this.estilo.push({
        boton:this.boton,
        fondo:this.fondo,
        titulo:this.titulo,
        boton1:this.boton1,
        logeo:this.logeo,
   });
   
  }

}
