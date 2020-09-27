import { Component, OnInit } from '@angular/core';
import {S1Service} from '../s1.service'
import { S2Service } from '../s2.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  productlist:any;
  tocart=[]
  

  constructor(private service:S1Service,private service2:S2Service) { }

  ngOnInit(): void {
    this.service.getData().subscribe(list=>{   
      this.productlist=list
      // console.log(this.productlist)
  })
  }

  decrease(product){
    
    if (product.Quantity>0){
      for(let i=0;i<this.productlist.length;i++){
        if(this.productlist[i]==product){
          this.productlist[i].Quantity-=1
          break
        }
      }}}
    



  increase(product){
    // console.log(product)
    for(let i=0;i<this.productlist.length;i++){
      if(this.productlist[i]==product){
        this.productlist[i].Quantity+=1
        break
    }}}

  cart(product2){
  let repeat=false
    for (let i=0;i<this.tocart.length;i++){
      if (this.tocart[i].Id==product2.Id){
        this.tocart[i].Quantity=product2.Quantity
        repeat=true
        if(product2.Quantity==0){
          this.tocart.splice(i,1)
          
        }
      }}

    if (repeat==false && product2.Quantity!=0){
    // console.log(product2)
    this.tocart.push(product2)
    // console.log(this.tocart)
    }
    this.service2.getData(this.tocart)
    
  }


}
