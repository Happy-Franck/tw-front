import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { TechnologieService } from 'src/app/services/technologie.service';

@Component({
  selector: 'app-technologie-create',
  templateUrl: './technologie-create.component.html',
  styleUrls: ['./technologie-create.component.css']
})
export class TechnologieCreateComponent implements OnInit {

  technologie: FormGroup
  sary: any
  categories: any

  constructor(
    private formBuilder: FormBuilder,
    private technologieService: TechnologieService,
    private categorieService: CategorieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categorieService.index().subscribe(
      data => {
        if(data){
          console.log(data)
          this.categories = data.categorie_services
        }
      },
      err => {
        console.log(err)
      }
    );
    this.technologie = this.formBuilder.group({
      'nom': ['', Validators.required],
      'categorie_services_id': ['', Validators.required],
      'image_technologie': ['', Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.technologieService.create(
      this.technologie.value.nom,
      this.technologie.value.categorie_services_id,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/services/technologies'])
      },
      err => {
        console.log(err)
      }
    );
  }

}
