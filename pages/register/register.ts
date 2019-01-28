import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {MyHttpService} from '../../app/utility/myhttp.service';

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private myHttp:MyHttpService,
    public alertCtrl: AlertController
    ) {
  }
  chekd = false;
  usernam="";
  zhengze=/^1(3|4|5|7|8)\d{9}$/;
  ionViewDidLoad() {
    this.chekd = false;
  }
  //手机号码注册验证
  blurInput(){
    if(!this.zhengze.test(this.usernam)){
      this.usernam="";
      const alert = this.alertCtrl.create({
        title: '警告!',
        subTitle: '请输入正确手机号码',
        buttons: ['确定']
      });
      alert.present();
    }
      //前往数据库查看是否有当前用户、
      if(this.usernam){
        this.myHttp.sendRequest("http://127.0.0.1:8888/q_uery?q_uery="+this.usernam)
        .subscribe((result:any)=>{
          console.log(result);
           if(result.user !=""){
            const alert = this.alertCtrl.create({
              title: '警告!',
              subTitle: this.usernam+'--用户已注册!请重新填写',
              buttons: ['确定']
            });
            alert.present();
           }
        })
      }
  }

 // 注册信息判断
  zhuce(pad,password){
       console.log(pad.value+"=="+password.value);
      if(pad.value =="" || password.value =="" || this.usernam ==""){
         console.log("填写正确的资料!"); 
         const alert = this.alertCtrl.create({
          title: '警告!',
          subTitle: '请填写完整的注册信息',
          buttons: ['确定']
        });
        alert.present();
      }else{
        console.log("前往数据库!");

      }
  }

  cnt = true;
  
  // 更改显示隐藏密码
  toogle(){

  }

}
// 更新