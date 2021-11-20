import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activite-edit',
  templateUrl: './activite-edit.component.html',
  styleUrls: ['./activite-edit.component.css']
})
export class ActiviteEditComponent implements OnInit {

  activiteForm: FormGroup
  sary: any
  activite: any
  api = environment.apiUrl;
  id: number

  constructor(
    private formBuilder: FormBuilder,
    private activiteService: ActiviteService ,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  update(){
    this.activiteService.update(this.id, this.activiteForm.value.titre, this.activiteForm.value.description, this.activiteForm.value.lieu, this.activiteForm.value.date,this.sary).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/activites'])
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
    this.activiteService.show(this.id).subscribe(
      data => {
        if(data.activite){
          this.activite = data.activite
          this.activiteForm = this.formBuilder.group({
            'titre': [''+this.activite.titre, Validators.required],
            'description': [''+this.activite.description, Validators.required],
            'lieu': [''+this.activite.lieu, Validators.required],
            'date': [''+this.activite.date, Validators.required],
            'image_activite': '',
          })
        }
      }
    )
  }


}
