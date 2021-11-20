import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TechnologieService } from 'src/app/services/technologie.service';

@Component({
  selector: 'app-technologie-index',
  templateUrl: './technologie-index.component.html',
  styleUrls: ['./technologie-index.component.css']
})
export class TechnologieIndexComponent implements OnInit {
  api = environment.apiUrl;
  technologies: any
  msg: string
  constructor(private technologieService: TechnologieService, private router: Router) { }

  ngOnInit(): void {
    this.technologieService.index().subscribe(
      data => {
        if(data){
          console.log(data)
          this.technologies = data.technologies
        }
        else{
          this.msg = "Aucune Technologie"
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  show(i: number){
    this.router.navigate(['/admin/services/technologies/'+i]);
  }

  edit(i: number){
    this.router.navigate(['/admin/services/technologies/edit/'+i]);
  }

  delete(i: number,index:number){
    this.technologieService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.technologies.splice(index,1)
          //this.technologies.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }
}
