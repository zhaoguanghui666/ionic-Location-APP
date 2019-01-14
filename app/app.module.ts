import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { RegisterPage } from '../pages/register/register';
import { GaodeMapPage } from '../pages/gaodemap/gaodemap';
import { ModelPage } from '../pages/model/model';

import { HttpModule } from '@angular/http'
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    GaodeMapPage,
    ModelPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    GaodeMapPage,
    ModelPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider


  ]
})
export class AppModule {

}
