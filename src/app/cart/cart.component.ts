import { Component, OnInit } from '@angular/core';
import {S2Service} from '../s2.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  details:any
  tc=0

  constructor(private crt:S2Service ) {
    this.details=crt.setData()
    
   }

  ngOnInit(): void {
    for(let i=0;i<this.details.length;i++){
      this.tc=this.tc+(this.details[i].Quantity*(this.details[i].Price))
    }

    
  }

}
