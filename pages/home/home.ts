import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GaodeMapPage } from '../gaodemap/gaodemap';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }
  ionViewDidLoad() {
  
  }
  objelist:Array<any>=[
    {name:"小米6 plus",
     id:18568726,
     dianliang:"18%",
     getgps:"北京市朝阳区天居园附近",
     juli:0.8
    },
    {name:"魅族 魅蓝",
     id:18568726,
     dianliang:"18%",
     getgps:"北京市朝阳区天居园附近",
     juli:254
    },
    {name:"华为p60",
    id:18568726,
      dianliang:"18%",
      getgps:"北京市朝阳区天居园附近",
      juli:189
    },
    {name:"小米2",
    id:18568726,
    dianliang:"18%",
    getgps:"北京市朝阳区天居园附近",
    juli:569
    },
    {name:"小牛",
    id:18568726,
    dianliang:"18%",
    getgps:"北京市朝阳区天居园附近",
    juli:856
 }
  ]

  beizhu(bz){
    let alert = this.alertCtrl.create({
      title: '输入修改的名称',
      inputs: [
        {
          name: 'username',
          placeholder: '修改备注'
        },
      ],
      buttons: [
        {
          text: '确定',
          role: 'cancel',
          handler: data => {
            if(data.username!==""){
              this.objelist[bz].name = data.username;
            }
            
          }
        },
        
      ]
    });
    alert.present();
  }
  // 页面跳转，带上相关的值
  tiaozhuan(msg,uid){
    this.navCtrl.push(GaodeMapPage,{
        id:msg,
        name:uid
    });
  }
}
