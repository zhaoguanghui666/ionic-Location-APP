import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import {MyHttpService} from '../../app/utility/myhttp.service';
// import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {

  user:any="";
  pad:any="";
  

  // 实例导入的组件
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private myHttp:MyHttpService,
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
   this.user= username.value;
   this.pad = password.value;
   if(this.user != "" && this.pad != ""){
    this.myHttp.sendRequest("http://127.0.0.1:8888/del_user?uname="+this.user+"&upwd="+this.pad)
    .subscribe((result:any)=>{
       if(result !=""){
          this.navCtrl.push(TabsPage);
       }else{
        const alert = this.alertCtrl.create({
          title: '警告!',
          subTitle: '请输入正确的用户名和密码',
          buttons: ['确定']
        });
        alert.present();
       }
    })
   }
  // 判断是否跳转登陆页
   if(this.user == "" && this.pad == ""){
     this.navCtrl.push(RegisterPage);
   }
  
  }



  }

  


 
