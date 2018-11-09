import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { HorariosProvider } from '../../providers/horarios/horarios';
import { HorariosPage } from '../horarios/horarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  linhas = [];
  linha;

  constructor(public navCtrl: NavController, private horariosProvider: HorariosProvider,
    public loadingCtrl: LoadingController) {
    
  }

  ionViewDidLoad() {
    this.getLinhas();
  }

  getLinhas() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    this.horariosProvider.getLinhas().subscribe(
      data => {
        console.log(data);
        this.linhas = data;
        loader.dismiss();
      }
    );
  }

  consultar(linha, data) {
    let dataLimpa = data.replace(/[^\d]+/g, '');
    this.navCtrl.push(HorariosPage, {
      linha: linha,
      data: dataLimpa
    });
  }

}
