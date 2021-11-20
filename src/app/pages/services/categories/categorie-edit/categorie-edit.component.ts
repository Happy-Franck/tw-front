import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.component.html',
  styleUrls: ['./categorie-edit.component.css']
})
export class CategorieEditComponent implements OnInit {

  categorieForm: FormGroup
  sary: any
  categorie: any
  api = environment.apiUrl;
  id: number

  constructor(
    private formBuilder: FormBuilder,
    private categorieService: CategorieService ,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  update(){
    this.categorieService.update(this.id, this.categorieForm.value.type_service,this.sary).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/services/categories'])
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
    this.categorieService.show(this.id).subscribe(
      data => {
        if(data.categorie_service){
          this.categorie = data.categorie_service
          this.categorieForm = this.formBuilder.group({
            'type_service': [''+this.categorie.type_service, Validators.required],
            'image_categorie_service': '',
          })
        }
      }
    )
  }

}
