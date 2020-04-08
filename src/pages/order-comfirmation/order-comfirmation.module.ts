import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderComfirmationPage } from './order-comfirmation';

@NgModule({
  declarations: [
    OrderComfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderComfirmationPage),
  ],
})
export class OrderComfirmationPageModule {}
