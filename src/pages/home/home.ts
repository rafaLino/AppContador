import { Component } from '@angular/core';
import { IonicView } from '../../util/IonicView';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements IonicView {

  public contador : number;

  constructor(){
    this.Reset();
  }
  ionViewDidLoad(){
    this.Reset();
  }
  Increment(){
    this.contador++;
  }

  Decrement(){
    this.contador--;
  }

  Reset(){
    this.contador = 0;
  }

}
