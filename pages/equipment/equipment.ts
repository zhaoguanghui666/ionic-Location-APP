import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the EquipmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-equipment',
  templateUrl: 'equipment.html',
})
export class EquipmentPage {
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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentPage');
  }
  split(t){
    console.log(t);
    const alert = this.alertCtrl.create({
      title: '提示!',
      subTitle: '是否删除'+this.objelist[t].name,
      buttons: [
        {
          text:'确定',
          handler: () => {
            for (var i=0;i<this.objelist.length;i++){
              if(t==i){
                this.objelist.splice(i,1);
              }
            }
          }
        },
        {
          text:'取消',
          handler:()=>{
            console.log("已取消");
          }
        }
      ]
    });
    alert.present();
  
  }
}
