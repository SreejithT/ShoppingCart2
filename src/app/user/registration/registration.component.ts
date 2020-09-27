import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../../register.service'
import {Temp} from '../../temp'

import {FormBuilder,Validators} from '@angular/forms'
import {FormControl,FormGroup} from '@angular/forms'
import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  submitted=false
  userlist:Temp[]
  


  constructor(private reg:RegisterService) { } //private fb:FormBuilder

  ngOnInit(): void {
    this.reg.readUser().subscribe(data=>{
      // console.log("Data received is ...",data)
      this.userlist=data.map((doc)=>{
        return{
          did2:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Temp
      })
      
    })





  }
  
  
  
  
  
  registrationForm= new FormGroup({
    did: new FormControl,
    name : new FormControl("",[Validators.required,Validators.pattern("[a-zA-z]+")]),
    email : new FormControl("",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    password : new FormControl("",[Validators.required,Validators.pattern("[a-z]+[A-Z]+[0-9]+\\W+$")]), //eg:aA0@
    dob : new FormControl("",[Validators.required]),
    phone : new FormControl("",[Validators.required,Validators.pattern("[0-9]{10}")]),
  })   



  // registrationForm=this.fb.group({
  //   name:['',[Validators.required,Validators.pattern("[a-zA-z]+")]],
  //   email:['',[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
  //   password:['',[Validators.required,Validators.pattern("[a-z]+[A-Z]+[0-9]+\W+")]],
  //   dob:['',[Validators.required]],
  //   phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]]
  // })

  register(){
    this.submitted=true
  if(this.registrationForm.invalid){
  return
  }
  else{
    if(this.registrationForm.value.did==null){
          // console.log(this.registrationForm.value.did)
    this.reg.saveUser(this.registrationForm.value)
        
    }
    else{
      this.reg.updateUser(this.registrationForm.value)
    }



  }}
  

  
  
  
  // update(){
    
  //   this.reg.updateUser(this.registrationForm.value)
  // }


  edit(user){
    
    this.registrationForm.patchValue({did:user.did2})
    this.registrationForm.patchValue({name:user.name})
    this.registrationForm.patchValue({email:user.email})
    this.registrationForm.patchValue({password:user.password})
    this.registrationForm.patchValue({dob:user.dob})  
    this.registrationForm.patchValue({phone:user.phone})
    // this.registrationForm.setValue(user)
    
  }

  reset(){
    this.submitted=false
    this.registrationForm.reset()
  
  }

  delete(user){
    this.reg.deleteUser(user)

  }

  get f(){
    
    return this.registrationForm.controls
  
  }
}
