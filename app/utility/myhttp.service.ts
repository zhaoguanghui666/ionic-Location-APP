import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {LoadingController,ToastController} from 'ionic-angular'

@Injectable()
export class MyHttpService {
    constructor(private toastCtrl:ToastController,private loadCtrl:LoadingController,private http: Http) { }

    showToast(msg:string){
        this.toastCtrl.create({
            message:msg,
            duration:500
        }).present();
    }

    sendRequest(url:string){
        //显示一个loading
        let  myLoad = this.loadCtrl.create({
            content:'正在加载...'
        });
        myLoad.present();

        return this.http.get(url,{withCredentials:false})
            .map((response: Response) => {
                myLoad.dismiss();
                return response.json()
            });
    }
    
}