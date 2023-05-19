import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn: 'root'
})
export class Authguard implements CanActivate{

    constructor(private _authService:AuthService,
        private _router:Router){}
    

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>  | Promise<boolean>  {
          return this._authService.isauthenticated()
             .then((isAuth:boolean)=>{
                  if(isAuth === true){
                    return true
                  }else{
                    this._router.navigate(['/'])
                    return false
                  }
             })
    
            }
}