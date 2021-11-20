import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personnel-edit',
  templateUrl: './personnel-edit.component.html',
  styleUrls: ['./personnel-edit.component.css']
})
export class PersonnelEditComponent implements OnInit {
  sary: any
  personnel: any
  personnelForm: FormGroup
  api = environment.apiUrl;
  id: number
  constructor(
    private formBuilder: FormBuilder,
    private personnelService: PersonnelService ,
    private router: Router,
    private route: ActivatedRoute) { }

  update(){
    this.personnelService.update(
      this.id,
      this.personnelForm.value.nom,
      this.personnelForm.value.prenom,
      this.personnelForm.value.cin,
      this.personnelForm.value.date_de_naissance,
      this.personnelForm.value.adresse,
      this.personnelForm.value.email,
      this.personnelForm.value.telephone,
      this.personnelForm.value.poste,
      this.personnelForm.value.salaire,
      this.personnelForm.value.debut_de_travail,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/personnels'])
      },
      err => {
        console.log(err)
      }
    );
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personnelService.show(this.id).subscribe(
      data => {
        if(data.personnel){
          this.personnel = data.personnel
          this.personnelForm = this.formBuilder.group({
            'nom': [''+this.personnel.nom, Validators.required],
            'prenom': [''+this.personnel.prenom, Validators.required],
            'cin': [''+this.personnel.cin, Validators.required],
            'date_de_naissance': [''+this.personnel.date_de_naissance, Validators.required],
            'adresse': [''+this.personnel.adresse, Validators.required],
            'email': [''+this.personnel.email, Validators.required],
            'telephone': [''+this.personnel.telephone, Validators.required],
            'poste': [''+this.personnel.poste, Validators.required],
            'debut_de_travail': [''+this.personnel.debut_de_travail, Validators.required],
            'salaire': [''+this.personnel.salaire, Validators.required],
            'photo_personnel': '',
          })
        }
      }
    )
  }
}
