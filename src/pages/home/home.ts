import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { SmartphonePage } from '../smartphone/smartphone';
import { TelevisionPage } from '../television/television';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  bocina = BocinaPage;
  lampara = LamparaPage;
  smartphone = SmartphonePage;
  television = TelevisionPage;

  constructor(public navCtrl: NavController) {

  }

  clickbocina()
  {
    this.navCtrl.push(this.bocina);
  }
  clicklampara()
  {
    this.navCtrl.push(this.lampara);
  }
  clicksmartphone()
  {
    this.navCtrl.push(this.smartphone);
  }
  clicktelevision()
  {
    this.navCtrl.push(this.television);
  }

}
