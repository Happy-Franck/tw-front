import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';
import { TechnologieService } from 'src/app/services/technologie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-technologie-edit',
  templateUrl: './technologie-edit.component.html',
  styleUrls: ['./technologie-edit.component.css']
})
export class TechnologieEditComponent implements OnInit {

  technologieForm: FormGroup
  sary: any
  categories: any
  technologie: any
  api = environment.apiUrl;
  id: number

  constructor(
    private formBuilder: FormBuilder,
    private technologieService: TechnologieService ,
    private router: Router,
    private route: ActivatedRoute,
    private categorieService: CategorieService
  ) { }


  update(){
    this.technologieService.update(
      this.id,
      this.technologieForm.value.nom,
      this.technologieForm.value.categorie_services_id,
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
    this.technologieService.show(this.id).subscribe(
      data => {
        console.log(data)
        if(data.technologie){
          this.technologie = data.technologie
          this.technologieForm = this.formBuilder.group({
            'nom': [''+this.technologie.nom, Validators.required],
            'categorie_services_id': [''+this.technologie.categorie_services_id, Validators.required],
            'image_technologie': '',
          })
        }
      }
    )
  }
}
