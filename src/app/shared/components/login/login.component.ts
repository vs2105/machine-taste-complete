import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ishavingaccount:boolean=true
  constructor(private _authService:AuthService,
    private _router:Router) { }

  ngOnInit(): void {
  }
   
  
  onLogin(username:HTMLInputElement,password:HTMLInputElement){
      this._authService.logintoapp(username.value,password.value )
    }
  }

