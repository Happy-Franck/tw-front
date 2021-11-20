import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { DevService } from 'src/app/services/dev.service';

@Component({
  selector: 'app-dev-create',
  templateUrl: './dev-create.component.html',
  styleUrls: ['./dev-create.component.css']
})
export class DevCreateComponent implements OnInit {
  dev: FormGroup
  sary: any
  categories: any

  constructor(
    private formBuilder: FormBuilder,
    private devService: DevService,
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
    this.dev = this.formBuilder.group({
      'nom': ['', Validators.required],
      'description': ['', Validators.required],
      'categorie_services_id': ['', Validators.required],
      'image_service': ['', Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.devService.create(
      this.dev.value.nom,
      this.dev.value.description,
      this.dev.value.categorie_services_id,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/services/devs'])
      },
      err => {
        console.log(err)
      }
    );
  }

}
