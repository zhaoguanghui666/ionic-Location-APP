import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {
    start:"";
    end:"";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPage');
  }
  // 轨迹回放取消 返回上一个页面;
  qxfanhui(){
    this.navCtrl.pop();
  }
  // 轨迹回放携带时间返回给数据给上一个页面
  okfanhui(){
  
    // this.navCtrl.pop();
  }
}