import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Temp} from '../../temp'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model=new Temp()
  logininfo=[]
  

  constructor() { }

  ngOnInit(): void {
  }
  
  login(){
    this.logininfo.push(this.model)
    this.model=new Temp

  }
  info(){
    console.log(this.logininfo)
  }


}
