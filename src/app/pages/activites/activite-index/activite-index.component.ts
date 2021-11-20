import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-activite-index',
  templateUrl: './activite-index.component.html',
  styleUrls: ['./activite-index.component.css']
})
export class ActiviteIndexComponent implements OnInit {

  api = environment.apiUrl;
  activites: any
  msg: string
  backToTop : HTMLScriptElement;
  constructor(private activiteService: ActiviteService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.activiteService.index().subscribe(
      data => {
        if(data){
          this.activites = data.activites
          this.backToTop = document.createElement("script");
          this.backToTop.src = "../../../assets/datatable.js";
          document.body.appendChild(this.backToTop);
        }
        else{
          this.msg = "Aucun activite"
        }
      },
      err => {
        console.log(err)
      }
    );
  }

  show(i: number){
    this.router.navigate(['/admin/activites/'+i]);
  }
  edit(i: number){
    this.router.navigate(['/admin/activites/edit/'+i]);
  }
  delete(i: number,index:number){
    this.activiteService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.activites.splice(index,1)
          //this.activites.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}
