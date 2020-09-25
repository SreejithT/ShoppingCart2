import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class S2Service {
  private a

  constructor() { }
  getData(fromdata){
    this.a=fromdata
  }

  setData(){
    return this.a
  }
    
}
