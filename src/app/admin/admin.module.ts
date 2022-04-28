import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.guard';
import { ProductEditorComponent } from './producteditor.component';
import { OrderTableComponent } from './ordertable.component';
import { ProductTableComponent } from './producttable.component';


let routing = RouterModule.forChild([
    {
        path: 'auth', component: AuthComponent
    },
    {
        path: 'main', component: AdminComponent, canActivate: [AuthGuard],
        children: [
          {path: 'products/:mode/:id', component: ProductEditorComponent},
          {path: 'products/:mode', component: ProductEditorComponent},
          {path: 'products', component: ProductTableComponent},
          {path: 'orders', component: OrderTableComponent},
          {path: '**', redirectTo: 'products'},
        ]
    },
    {
        path: '**', redirectTo: 'auth'
    }
])



@NgModule({
  declarations: [AuthComponent, AdminComponent, ProductTableComponent, 
    ProductEditorComponent, OrderTableComponent],
  imports: [
    CommonModule,ModelModule, FormsModule, routing
  ],
  exports: [],
  providers:[AuthGuard ]
})
export class AdminModule { }