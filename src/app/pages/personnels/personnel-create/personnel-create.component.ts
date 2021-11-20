import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnel-create',
  templateUrl: './personnel-create.component.html',
  styleUrls: ['./personnel-create.component.css']
})
export class PersonnelCreateComponent implements OnInit {

  personnel: FormGroup
  sary: any

  constructor(
    private formBuilder: FormBuilder,
    private personnelService: PersonnelService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.personnel = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      date_de_naissance: ['', Validators.required],
      adresse: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      poste: ['', Validators.required],
      salaire: ['', Validators.required],
      debut_de_travail: ['', Validators.required],
      photo_personnel: ['',Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.personnelService.create(
      this.personnel.value.nom,
      this.personnel.value.prenom,
      this.personnel.value.cin,
      this.personnel.value.date_de_naissance,
      this.personnel.value.adresse,
      this.personnel.value.email,
      this.personnel.value.telephone,
      this.personnel.value.poste,
      this.personnel.value.salaire,
      this.personnel.value.debut_de_travail,
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

}
