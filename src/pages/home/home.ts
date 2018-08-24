import { Component } from '@angular/core';
import { IonicView } from '../../util/IonicView';
import { Vibration } from '@ionic-native/vibration';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements IonicView {

  public contador: number;

  constructor(
    private vibration : Vibration
  ) {
    this.Reset();
  }
  ionViewDidLoad() {
    this.Reset();
  }

  Increment() {
    this.contador++;
    this.vibration.vibrate(15);
  }

  Reset() {
    this.contador = 0;
  }

}
