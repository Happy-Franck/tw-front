import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecrutementService } from 'src/app/services/recrutement.service';

@Component({
  selector: 'app-recrutement-edit',
  templateUrl: './recrutement-edit.component.html',
  styleUrls: ['./recrutement-edit.component.css']
})
export class RecrutementEditComponent implements OnInit {

  sary: any
  id: number
  recrutement: any
  recrutementForm: FormGroup

  constructor(private route: ActivatedRoute, private router: Router, private recrutementService: RecrutementService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.recrutementService.show(this.id).subscribe(
      data => {
        if(data.recrutement){
          this.recrutement = data.recrutement
          this.recrutementForm = this.formBuilder.group({
            'poste': [''+this.recrutement.poste, Validators.required],
            'profil': [''+this.recrutement.profil, Validators.required],
            'duree': [''+this.recrutement.duree, Validators.required],
            'technologies': [''+this.recrutement.technologies, Validators.required],
            'image_recrutement': '',
          })
        }
      }
    )
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  update(){
    this.recrutementService.update(
      this.id,
      this.recrutementForm.value.poste,
      this.recrutementForm.value.profil,
      this.recrutementForm.value.duree,
      this.recrutementForm.value.technologies,
      this.sary
      ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/recrutements'])
      },
      err => {
        console.log(err)
      }
    );
  }

}
