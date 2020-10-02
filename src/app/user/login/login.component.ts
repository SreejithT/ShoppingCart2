import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Temp} from '../../temp'
import {RegisterService} from '../../register.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model=new Temp()
  userlist2:Temp[]
  logininfo=[]
  returnURL:string=""
  status=""
  

  constructor(private reg:RegisterService,private router:Router) { }

  ngOnInit(): void {
    this.returnURL="/dashboard"
    this.reg.readUser().subscribe(data=>{
      // console.log("Data received is ...",data)
      this.userlist2=data.map((doc)=>{
        return{
          did2:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Temp
      })
      
    })

  }
  
  login(){
    // console.log(this.userlist2)
    // console.log(this.model.email)
    // console.log(this.model.password)

    for (let i=0;i<this.userlist2.length;i++){
      if(this.model.email==this.userlist2[i].email){
        if(this.model.password==this.userlist2[i].password){
          localStorage.setItem("isLoggedIn","true")
          localStorage.setItem("username",this.model.email)
          this.router.navigate([this.returnURL])
          console.log("Login Successful")
          this.status="Login Successful"
          
          break;
        }
        else{
          console.log("Login Failed(Check Password)")
          this.status="Login Failed(Check Password)"
          break;
        }
      }
      else{
        this.status="Email/Password incorrect"
      }
    
    
     
    
    
    // }

    // else{
    //   console.log("Wrong Credentials")

    // }
    }}
    

      
    




    // this.logininfo.push(this.model)
    // this.model=new Temp

  
  
  // info(){
  //   console.log(this.logininfo)
  // }


}
