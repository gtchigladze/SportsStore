import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreComponent } from './store/store.component';
import { CounterDirective } from './store/counter.directive';
import { StoreRoutingModule } from './store-routing.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './storefirst.guard';
import { AdminModule } from '../admin/admin.module';


@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent,

  ],
  imports: [
    CommonModule,ModelModule, FormsModule,StoreRoutingModule, AdminModule, ReactiveFormsModule
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
  providers:[StoreFirstGuard ]
})
export class StoreModule { }
