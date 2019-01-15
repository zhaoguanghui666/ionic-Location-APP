import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModelPage } from '../model/model';
import { ConditionalExpr } from '@angular/compiler';
import { Storage } from '@ionic/storage';
// import { HomePage } from '../homepage/homepage';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// baidu map
// declare var BMap;

// gaode map
declare var AMap;

//google map
// declare var google;

@IonicPage()
@Component({
  selector: 'page-gaodemap',
  templateUrl: 'gaodemap.html',
})
export class GaodeMapPage {
 
  @ViewChild('map2') map_container2: ElementRef;
  map: any;//地图对象
// 引入后实例
 // gaodemap
  // 定义一个接受父级传的参数
  id:"";
  naum:"";
  myshow = 1;
  // 上一页返回的数据
  myNewData:"";
  myNewData2:"";
  kaishi:any= "";
  jieshu:any="";
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage,
    public navParams: NavParams) {
      this.id = this.navParams.get('id');
      this.naum = this.navParams.get('name');
  }
  
    // 页面初始
  ionViewDidEnter() {
  this.load();
  }
  load(){
    this.map = new AMap.Map(this.map_container2.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        center:[116.397428, 39.90923],
        zoom: 16, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }
 
  // 点对标记
  addMarker(){
  //  this.map.clearMap();
   let marker = new AMap.Marker({
        icon: "../../assets/icon/poi-marker-default.png",
        position: [116.397428, 39.90923],
        offset: new AMap.Pixel(-13, -30)
    });
    // marker.setMap(this.map);
    let marke = new AMap.Marker({
      icon: "../../assets/icon/20181129-161252.png",
      position: [110.35,30.89],
      offset: new AMap.Pixel(-13, -30)
    });
    this.map.add([marker,marke]);
    //  一直当前视口
    this.map.setFitView();
  }

// 时间函数
  p(){
    this.storage.get('s_tart').then((val)=>{
      this.kaishi=val;
      console.log(val);
  })
  this.jieshu = this.storage.get('e_nd');
    console.log(">>>"+this.jieshu.val);
  console.log("==="+this.kaishi);
  if(this.kaishi == ""){ 
    // 如果没有选择的时间，就跳转到选择时间界面
    let profileModal = this.modalCtrl.create(ModelPage);
        profileModal.present();
  }
  console.log(this.kaishi);
  // let profileModal = this.modalCtrl.create(ModelPage);
  // profileModal.present();
}
 
  
// marker.setMap(this.map);
  // 弹框以及弹框的时间
 
 
// 点击轨迹改变布尔值 跳转到轨迹回放
mysh(){
   if(this.myshow == 1){
    this.myshow ++; 
   }else{
     this.myshow--;
   }
  //  this.map.clearMap();
  //  this.p();
   let profileModal = this.modalCtrl.create(ModelPage);
    profileModal.present();
   }
  //  退出回放
    tuichuhuifang(){
      this.navCtrl.pop()
    }

  // 轨迹回放
  getloti(){
    const modal = this.modalCtrl.create("");
    modal.present();
  }




  }
 

