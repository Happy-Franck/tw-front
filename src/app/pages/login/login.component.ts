import { Component, OnInit , OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , OnDestroy{

  loginForm: FormGroup
  msg:string = ''

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required, Validators.email],
      'password': ['', Validators.required],
    })
  }

  connexion(){
    this.msg = ''
    const data = this.loginForm.value
    this.authService.login(data['email'], data['password']).subscribe(
      data => {
        if(data.token){
          this.authService.creerSession(data.token, data.user)
          this.route.navigate(['/admin/profil'])
        }
        else{
          this.msg = "Email ou Mot de passe incorrect"
        }
      },
      err => {
        console.log(err)
      }
    );
  }

  ngOnDestroy(){

  }

}
