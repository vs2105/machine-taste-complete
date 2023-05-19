import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloogedinstatus:boolean=false

  constructor(private _router:Router) { }



  getstatusloogedin(){
    return this.isloogedinstatus
  }


  logintoapp(username:string, password:string){
    if(username === 'qaifi' && password === 'qaifi'){
      this.isloogedinstatus=true
      localStorage.setItem('token',"JWT token")
      localStorage.setItem('userole','A')
      this._router.navigate(['/order'])
    }else{
      this._router.navigate(['/'])
    }
   
  }

  logoutfromapp(){
     this.isloogedinstatus=false
     localStorage.removeItem('token')
     localStorage.removeItem('userrole')
  }

  isauthenticated():Promise<boolean>{
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        if(localStorage.getItem('token')){
          this.isloogedinstatus = true
        }else{
          this.isloogedinstatus = false
        }
        resolve(this.isloogedinstatus)
       }, 1000);
    })
}
}
