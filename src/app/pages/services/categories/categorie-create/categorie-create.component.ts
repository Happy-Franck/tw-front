import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.component.html',
  styleUrls: ['./categorie-create.component.css']
})
export class CategorieCreateComponent implements OnInit {

  categorie: FormGroup
  sary: any

  constructor(
    private formBuilder: FormBuilder,
    private categorieService: CategorieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categorie = this.formBuilder.group({
      'type_service': ['', Validators.required],
      'image_categorie_service': ['', Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.categorieService.create(
      this.categorie.value.type_service,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/services/categories'])
      },
      err => {
        console.log(err)
      }
    );
  }
}
