import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";


@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, {provide: StaticDataSource, useClass: RestDataSource}
        , Cart,RestDataSource,
    Order, OrderRepository, AuthService]

    
})



export class ModelModule{}