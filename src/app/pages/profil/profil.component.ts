import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any
  api_url = environment.apiUrl;
  
  constructor(private authService: AuthService, private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.showProfil().subscribe(
    data => {
      if(data){
        console.log(data)
        this.user = data.user
      }
      else{
        
      }
    },
    err => {
      console.log(err)
    }
  );
  }

}
