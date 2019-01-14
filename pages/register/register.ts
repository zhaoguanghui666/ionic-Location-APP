import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { LoginPage } from '../login/login';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
// 版本更新

  chekd = false;
    周期状态值
  ionViewDidLoad() {
    this.chekd = false;
  }
  注册信息判断
  zhuce(pad){
      console.log(pad);
  }

  cnt = true;
  
  // 更改显示隐藏密码
  toogle(){

  }

}
