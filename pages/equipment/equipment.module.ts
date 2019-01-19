import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EquipmentPage } from './equipment';

@NgModule({
  declarations: [
    EquipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EquipmentPage),
  ],
})
export class EquipmentPageModule {}
