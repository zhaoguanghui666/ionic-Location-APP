import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ModelPage } from '../model/model';
import { ConditionalExpr } from '@angular/compiler';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
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
  startIcon="";
  Marker:any="";
  start="";
  arker:any="";
  // Map = "";
  marker:any="";
  marke = "";
  // 轨迹
  lineArr = [[116.478935,39.997761],[116.478939,39.997825],
            [116.478912,39.998549],[116.478912,39.998549],
            [116.478998,39.998555],[116.478998,39.998555],
            [116.479282,39.99856],[116.479658,39.998528],
            [116.480151,39.998453],[116.480784,39.998302],
            [116.480784,39.998302],[116.481149,39.998184],
            [116.481573,39.997997],[116.481863,39.997846],
            [116.482072,39.997718],[116.482362,39.997718],
            [116.483633,39.998935],[116.48367,39.998968],
            [116.484648,39.999861]];
            // 轨迹
  mar:any = [[116.478935,39.997761],[116.478939,39.997825],
            [116.478912,39.998549],[116.478912,39.998549],
            [116.478998,39.998555],[116.478998,39.998555],
            [116.479282,39.99856],[116.479658,39.998528],
            [116.480151,39.998453],[116.480784,39.998302],
            [116.480784,39.998302],[116.481149,39.998184],
            [116.481573,39.997997],[116.481863,39.997846],
            [116.482072,39.997718],[116.482362,39.997718],
            [116.483633,39.998935],[116.48367,39.998968],
            [116.484648,39.999861]];

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private storage: Storage,
    public events: Events,
    public navParams: NavParams) {
      this.id = this.navParams.get('id');
      this.naum = this.navParams.get('name');
      //events 使用
      events.subscribe('user:login', (canshu) => {
        // userEventData 是一个数组, so grab our first and only arg
        console.log(canshu);
  
       });
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
    // 设置一个图标
    this.startIcon = new AMap.Icon({
    // 图标尺寸
    size: new AMap.Size(50, 50),
    // 图标的取图地址
    image: "../../assets/icon/20181129-161252.png",
    // 图标所用图片大小
    imageSize: new AMap.Size(30, 27),
    // 图标取图偏移量
    imageOffset: new AMap.Pixel(-0, -0)
});
  //  this.map.clearMap();
   this.marker = new AMap.Marker({
        icon: "../../assets/icon/poi-marker-default.png",
        position: [116.397428, 39.90923],
        offset: new AMap.Pixel(-13, -30)
    });
    // marker.setMap(this.map);
    this.marke = new AMap.Marker({
      icon: this.startIcon,
      position: [110.35,30.89],
      offset: new AMap.Pixel(-13, -30)
    });
    this.map.add([this.marker,this.marke]);
    //  一直当前视口
    this.map.setFitView();
  }

// 时间函数
  p(){
    this.storage.get('s_tart').then((val)=>{
      this.kaishi=val;
      console.log("==="+this.kaishi);
      if(this.kaishi == ""){ 
        // 如果没有选择的时间，就跳转到选择时间界面
        let profileModal = this.modalCtrl.create(ModelPage);
            profileModal.present();
      }else{
        
      }
  })
  

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
      // this.events.publish('user:login',this.start);
      this.navCtrl.pop()
    }
  //暂停回放
    zanting(){
      // 以下内容为轨迹回放的所有代码，拆解到各个生命周期即可，注意变量名
      this.map.remove([this.marker,this.marke]);
      console.log("===-=-=-=");
      // let Map = new AMap.Map("map_container2", {
      //   resizeEnable: true,
      //   center: [116.397428, 39.90923],
      //   zoom: 17
    // });
      console.log("hah");
    this.mar = new AMap.Marker({
        map: this.map,
        position: [116.478935,39.997761],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle:-90,
    });

    //绘制轨迹
    let polyline = new AMap.Polyline({
        map: this.map,
        path: this.lineArr,
        showDir:true,
        strokeColor: "#28F",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6,      //线宽
        // strokeStyle: "solid"  //线样式
    });

    var passedPolyline = new AMap.Polyline({
        map: this.map,
        // path: lineArr,
        strokeColor: "#AF5",  //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 6,      //线宽
        // strokeStyle: "solid"  //线样式
    });
    console.log("duandian-=-=");

    this.mar.on('moving', function (e) {
        passedPolyline.setPath(e.passedPath);
    });
        console.log("堆栈");
    this.map.setFitView();
    this.mar.moveAlong(this.lineArr, 200);
    } 
  // 轨迹回放
  getloti(){
    const modal = this.modalCtrl.create("");
    modal.present();
  }




  }
 

