import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class navbarComponent implements OnInit {

  constructor(private _AuthService :AuthService, private _router:Router ) { }

  ngOnInit(): void {
  }

  onLogout(){
    this._AuthService.logoutfromapp()
    this._router.navigate(['/'])
   
  }
}
