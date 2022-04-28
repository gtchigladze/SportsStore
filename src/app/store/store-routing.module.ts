import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreFirstGuard } from './storefirst.guard';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreComponent } from './store/store.component';



const routes: Routes = [

  
{
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard]
},
{
  path: 'cart',
  component: CartDetailComponent,
  canActivate: [StoreFirstGuard]
},
{
  path: 'checkout',
  component: CheckoutComponent,
  canActivate: [StoreFirstGuard]
},
{
  path: 'admin',
  loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),
  canActivate: [StoreFirstGuard]
},
{
      
  path: '',
  redirectTo: 'store',
  pathMatch: 'full'
},
{
  path: '**',
 redirectTo: '/store'
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }