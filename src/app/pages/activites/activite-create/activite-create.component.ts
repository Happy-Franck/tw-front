import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-activite-create',
  templateUrl: './activite-create.component.html',
  styleUrls: ['./activite-create.component.css']
})
export class ActiviteCreateComponent implements OnInit {

  activite: FormGroup
  sary: any

  constructor(
    private formBuilder: FormBuilder,
    private activiteService: ActiviteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activite = this.formBuilder.group({
      'titre': ['', Validators.required],
      'description': ['', Validators.required],
      'lieu': ['', Validators.required],
      'date': ['', Validators.required],
      'image_activite': ['', Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.activiteService.create(
      this.activite.value.titre,
      this.activite.value.description,
      this.activite.value.lieu,
      this.activite.value.date,
      this.sary
    ).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/activites'])
      },
      err => {
        console.log(err)
      }
    );
  }

}
