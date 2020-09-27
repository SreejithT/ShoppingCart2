import { Component, OnInit } from '@angular/core';
import { S2Service } from '../s2.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  details=[]
  tc

  constructor(private crt: S2Service) {
    this.details = crt.setData()

  }

  ngOnInit(): void {
    // for(let i=0;i<this.details.length;i++){
    //   this.tc=this.tc+(this.details[i].Quantity*(this.details[i].Price))
    //   console.log(this.details)
    // }
  }



  decrease2(product) {

    if (product.Quantity > 0) {
      for (let i = 0; i < this.details.length; i++) {
        if (this.details[i] == product) {
          this.details[i].Quantity -= 1
          break
        }
      }
    }
  }

  increase2(product) {
    // console.log(product)
    for (let i = 0; i < this.details.length; i++) {
      if (this.details[i] == product) {
        this.details[i].Quantity += 1
        break
      }
    }
  }
  cost() {
    this.tc = 0
    for (let i = 0; i < this.details.length; i++) {
      this.tc = this.tc + (this.details[i].Quantity * (this.details[i].Price))
      console.log(this.details)
    }
  }
  remove2(product) {
    for (let i = 0; i < this.details.length; i++) {
      if (this.details[i] == product) {
        this.details.splice(i,1)
        break
        // console.log(this.details[i])
      }
    }



  }

}




