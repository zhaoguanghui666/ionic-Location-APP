import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController, 
    public storage: Storage,
    public navParams: NavParams,
    public events: Events
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPage');
  }
  // 轨迹回放取消 返回上一个页面;
  qxfanhui(){
    this.navCtrl.pop();
  }
  // 轨迹回放携带时间返回给数据给上一个页面
  okfanhui(){
    this.events.publish('user:login',this.start,Date.now());
    this.storage.set('s_tart',this.start);
    this.storage.set('e_nd',this.end);
    this.navCtrl.pop();
    
  }
}
