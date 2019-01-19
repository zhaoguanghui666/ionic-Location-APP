import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EquipmentPage}from '../equipment/equipment';
/**
 * Generated class for the StarsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stars',
  templateUrl: 'stars.html',
})
export class StarsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarsPage');
  }
    // 跳转到设备管理
    equipment(){
        this.navCtrl.push(EquipmentPage);
    }
}
