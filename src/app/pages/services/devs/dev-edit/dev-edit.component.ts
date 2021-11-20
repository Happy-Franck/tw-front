import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { DevService } from 'src/app/services/dev.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dev-edit',
  templateUrl: './dev-edit.component.html',
  styleUrls: ['./dev-edit.component.css']
})
export class DevEditComponent implements OnInit {

  devForm: FormGroup
  sary: any
  categories: any
  dev: any
  api = environment.apiUrl;
  id: number

  constructor(
    private formBuilder: FormBuilder,
    private devService: DevService ,
    private router: Router,
    private route: ActivatedRoute,
    private categorieService: CategorieService
  ) { }


  update(){
    this.devService.update(
      this.id,
      this.devForm.value.nom,
      this.devForm.value.description,
      this.devForm.value.categorie_services_id,
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

  image(event:any ) {
    this.sary = event.target.files[0]
  }

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
    this.id = this.route.snapshot.params['id'];
    this.devService.show(this.id).subscribe(
      data => {
        if(data.service){
          this.dev = data.service
          this.devForm = this.formBuilder.group({
            'nom': [''+this.dev.nom, Validators.required],
            'description': [''+this.dev.description, Validators.required],
            'categorie_services_id': [''+this.dev.categorie_services_id, Validators.required],
            'image_dev_service': '',
          })
        }
      }
    )
  }

}
