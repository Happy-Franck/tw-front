import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartenaireService } from 'src/app/services/partenaire.service';

@Component({
  selector: 'app-partenaire-create',
  templateUrl: './partenaire-create.component.html',
  styleUrls: ['./partenaire-create.component.css']
})
export class PartenaireCreateComponent implements OnInit {

  partenaire: FormGroup
  sary: any

  constructor(
    private formBuilder: FormBuilder,
    private partenaireService: PartenaireService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.partenaire = this.formBuilder.group({
      nom: ['', Validators.required],
      url: ['', Validators.required],
      image_partenaire: ['',Validators.required],
    })
  }

  image(event:any ) {
    this.sary = event.target.files[0]
  }

  ajout(){
    this.partenaireService.create(this.partenaire.value.nom, this.partenaire.value.url,this.sary).subscribe(
      success => {
        console.log(success)
        this.router.navigate(['/admin/partenaires'])
      },
      err => {
        console.log(err)
      }
    );
  }

}
