import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit  {
  orderSent: boolean = false;
  submitted: boolean = false;
  formValid!: FormGroup


  constructor(public repository: OrderRepository,
    public order: Order, private fb: FormBuilder) { }

    submitOrder(form: NgForm){
      this.submitted = true;
      if (form.valid){
        this.repository.saveOrder(this.order).subscribe(order =>
          {
            this.order.clear();
            this.orderSent = true;
            this.submitted = false;
          })
      }
    }


    ngOnInit(): void {
    
    
        this.formValid = this.fb.group({
          name: ["", [Validators.required]
          ],
          address: ["", [Validators.required, ]
        ],
        city: ["", [Validators.required, ]
        ],
        state: ["", [Validators.required, ]
        ],
        zip: ["", [Validators.required, Validators.pattern("^[0-9]*$") ]
        ],
        country: ["", [Validators.required, ]
        ],
        });
      }
  

}
