import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partenaire-index',
  templateUrl: './partenaire-index.component.html',
  styleUrls: ['./partenaire-index.component.css']
})
export class PartenaireIndexComponent implements OnInit {

  api = environment.apiUrl;
  partenaires: any
  msg: string
  constructor(private partenaireService: PartenaireService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.partenaireService.index().subscribe(
      data => {
        if(data){
          this.partenaires = data.partenaires
        }
        else{
          this.msg = "Aucun partenaire"
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  show(i: number){
    this.router.navigate(['/admin/partenaires/'+i]);
  }
  edit(i: number){
    this.router.navigate(['/admin/partenaires/edit/'+i]);
  }
  delete(i: number,index:number){
    this.partenaireService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.partenaires.splice(index,1)
          //this.partenaires.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }
}
