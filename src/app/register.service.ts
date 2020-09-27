import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import {Temp} from './temp'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private obj:AngularFirestore) { }

  saveUser(user:Temp){
    
    this.obj.collection("userdata").add({...user})


  }
  readUser(){
    return this.obj.collection("userdata").snapshotChanges()

  }
  updateUser(user){
    this.obj.doc("userdata/"+user.did).update({...user})
  } 
  deleteUser(user){
    this.obj.doc("userdata/"+user.did2).delete()
  }



}



