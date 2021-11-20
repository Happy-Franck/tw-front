import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecrutementService } from 'src/app/services/recrutement.service';

@Component({
  selector: 'app-recrutement-create',
  templateUrl: './recrutement-create.component.html',
  styleUrls: ['./recrutement-create.component.css']
})
export class RecrutementCreateComponent implements OnInit {

  sary: any
  recrutement: FormGroup

  constructor(
      private formBuilder: FormBuilder,
      private recrutementService: RecrutementService,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.recrutement = this.formBuilder.group({
      'poste': ['', Validators.required],
      'profil': ['', Validators.required],
      'duree': ['', Validators.required],
      'technologies': ['', Validators.required],
      'image_recrutement': ['',Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.recrutementService.create(
      this.recrutement.value.poste,
      this.recrutement.value.profil,
      this.recrutement.value.duree,
      this.recrutement.value.technologies,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
      },
      err => {
        console.log(err)
      }
    );
    this.router.navigate(['/admin/recrutements'])
  }

}
