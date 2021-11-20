import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partenaire-edit',
  templateUrl: './partenaire-edit.component.html',
  styleUrls: ['./partenaire-edit.component.css']
})
export class PartenaireEditComponent implements OnInit {
  sary: any
  partenaire: any
  partenaireForm: FormGroup
  api = environment.apiUrl;
  id: number
  constructor(
    private formBuilder: FormBuilder,
    private partenaireService: PartenaireService ,
    private router: Router,
    private route: ActivatedRoute) { }

  update(){
    this.partenaireService.update(this.id, this.partenaireForm.value.nom, this.partenaireForm.value.url,this.sary).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/partenaires'])
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
    this.partenaireService.show(this.id).subscribe(
      data => {
        if(data.partenaire){
          this.partenaire = data.partenaire
          this.partenaireForm = this.formBuilder.group({
            'nom': [''+this.partenaire.nom, Validators.required],
            'url': [''+this.partenaire.url, Validators.required],
            'image_partenaire': '',
          })
        }
      }
    )
  }

}
