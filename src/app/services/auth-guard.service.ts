import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot , UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    console.log('isAuth = '+this.auth.isAuth());
    // if(this.auth.isAuth == false){
    //   this.auth.user().subscribe(
    //     data => {
    //       if(data.user){
    //         this.auth.isAuth = true;
    //       }
    //       else{                    
    //         this.auth.isAuth = false;
    //       }
    //     },
    //     err => {
    //       this.auth.isAuth = false;
    //       console.log(err)
    //     }
    //   );
    //   if(this.auth.isAuth == false){
    //     this.router.navigate(['/']);
    //     return false;
    //   }
    //   else if(this.auth.isAuth == true){
    //     return true;
    //   }
    // }
    // return true;
    if(! this.auth.isAuth()){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}