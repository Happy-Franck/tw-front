import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profil-update',
  templateUrl: './profil-update.component.html',
  styleUrls: ['./profil-update.component.css']
})
export class ProfilUpdateComponent implements OnInit {
  api = environment.apiUrl;
  profilForm: FormGroup
  user: any
  sary: any

  constructor(
    private formBuilder: FormBuilder,
    private profilService: ProfilService ,
    private router: Router) { }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ngOnInit(): void {
    this.profilService.showProfil().subscribe(
      data => {
        if(data.user){
          this.user = data.user
          localStorage.setItem('user', JSON.stringify(data.user));
          this.profilForm = this.formBuilder.group({
            'nom_entreprise': [''+this.user.nom_entreprise, Validators.required],
            'adresse_siege_social': [''+this.user.adresse_siege_social, Validators.required],
            'gerant': [''+this.user.gerant, Validators.required],
            'debut_d_activite': [''+this.user.debut_d_activite, Validators.required],
            'telephone': [''+this.user.telephone, Validators.required],
            'numero_rcs': [''+this.user.numero_rcs, Validators.required],
            'mail_de_contact': [''+this.user.mail_de_contact, Validators.required],
            'email': [''+this.user.email, Validators.required],
            'password': [''],
            'logo': '',
          })
        }
      }
    )
  }


  update(){
    this.profilService.updateProfil(
      this.profilForm.value.nom_entreprise,
      this.profilForm.value.adresse_siege_social,
      this.profilForm.value.gerant,
      this.profilForm.value.debut_d_activite,
      this.profilForm.value.telephone,
      this.profilForm.value.numero_rcs,
      this.profilForm.value.mail_de_contact,
      this.profilForm.value.email,
      this.profilForm.value.password,
      this.sary
      ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/profil'])
        location.reload()
      },
      err => {
        console.log(err)
      }
    );
  }

}
