import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthGuardService } from '../auth-guard.service';
import {AuthorizationService} from '../authorization.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  constructor(private service:AuthorizationService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.service.logout()
    this.router.navigate(["/login"])
  }

}
