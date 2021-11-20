import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { AuthService } from '../../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nom: string
  logo: string
  api = environment.apiUrl;

  constructor(private authService: AuthService, private router: Router, private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.showProfil().subscribe(
      data => {
        if(data){
          console.log(data.user)
          this.nom = data.user.nom_entreprise
         this.logo = data.user.logo
        }
        else{

        }
      },
      err => {
        console.log(err)
      }
    );
  }

  deconnexion(){
    this.authService.logout().subscribe(
      success => {
        console.log(success)
      },
      err => {
        console.log(err)
      }
    );
    this.router.navigate(['/'])
    localStorage.clear();
  }

}
