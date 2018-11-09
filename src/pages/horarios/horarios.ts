import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HorariosProvider } from '../../providers/horarios/horarios';

/**
 * Generated class for the HorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html',
})
export class HorariosPage {

  linha;
  data;
  horarios;
  constructor(public navCtrl: NavController, public navParams: NavParams, private horariosProvider: HorariosProvider,
    public loadingCtrl: LoadingController) {
    this.linha = navParams.get("linha");
    this.data = navParams.get("data");
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    this.horariosProvider.getHorarios(this.linha.numero, this.data).subscribe(
      data => {
        console.log(data);
        this.horarios = data;
        loader.dismiss();
      }, erro => {
        alert("Programação nao encontrada")
      }
    );
  }

}
