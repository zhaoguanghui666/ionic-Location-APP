import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
// import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {


  // 实例导入的组件
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl: AlertController
     ) {
  }
  ionViewDidLoad() {
   
  }

  showAler() {
    const alert = this.alertCtrl.create({
      title: '警告!',
      subTitle: '请输入正确的用户名和密码',
      buttons: ['确定']
    });
    alert.present();
  }
  // 函数
    // na(){
    //  console.log("法买 ");
    //  this.navCtrl.push(RegisterPage);
    // }

  logIn(username, password){
   var user= username;
   var pad = password;
   if(user.value==""||pad.value==""){
      this.navCtrl.push(RegisterPage); 
   }else{
    this.showAler();        
    }
  }



  }

  


 
