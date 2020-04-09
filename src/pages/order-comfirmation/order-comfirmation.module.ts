import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderComfirmationPage } from './order-comfirmation';
import { PedidoService } from '../../services/domain/pedido.service';

@NgModule({
  declarations: [
    OrderComfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderComfirmationPage),
  ],
  providers:[
    PedidoService
  ]
})
export class OrderComfirmationPageModule {}
