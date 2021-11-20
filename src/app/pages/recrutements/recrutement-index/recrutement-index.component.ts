import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecrutementService } from 'src/app/services/recrutement.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recrutement-index',
  templateUrl: './recrutement-index.component.html',
  styleUrls: ['./recrutement-index.component.css']
})
export class RecrutementIndexComponent implements OnInit {

  recrutements: any
  msg: string
  api = environment.apiUrl;

  constructor(private recrutementService: RecrutementService, private router: Router) { }

  ngOnInit(): void {
    this.recrutementService.index().subscribe(
      data => {
        if(data){
          this.recrutements = data.recrutement
        }
        else{
          this.msg = "Aucun recrutement"
        }
      },
      err => {
        console.log(err)
      }
    );
  }

  show(i: number){
    this.router.navigate(['/admin/recrutements/'+i]);
  }
  edit(i: number){
    this.router.navigate(['/admin/recrutements/edit/'+i]);
  }
  delete(i: number,index:number){
    this.recrutementService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.recrutements.splice(index,1)
          //this.partenaires.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}
