import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-personnel-index',
  templateUrl: './personnel-index.component.html',
  styleUrls: ['./personnel-index.component.css']
})
export class PersonnelIndexComponent implements OnInit {

  pdf: any
  api = environment.apiUrl;
  personnels: any
  msg: string
  constructor(private personnelService: PersonnelService, private router: Router) { }

  ngOnInit(): void {
    this.personnelService.index().subscribe(
      data => {
        if(data){
          this.personnels = data.personnels
        }
        else{
          this.msg = "Aucun personnel"
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  show(i: number){
    this.router.navigate(['/admin/personnels/'+i]);
  }
  edit(i: number){
    this.router.navigate(['/admin/personnels/edit/'+i]);
  }
  delete(i: number,index:number){
    this.personnelService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.personnels.splice(index,1)
          //this.personnels.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  badge(i: number){
    this.personnelService.badge(i).subscribe(
      data => {
        console.log(data)
        this.pdf = data.pdf
        window.location.href = this.api+'storage/'+this.pdf;
      },
      err => {
        console.log(err)
      }
    );
  }

  attestation(i: number){
    this.personnelService.attestation(i).subscribe(
      data => {
        console.log(data)
        this.pdf = data.pdf
        window.location.href = this.api+'storage/'+this.pdf;
      },
      err => {
        console.log(err)
      }
    );
  }

  contrat(i: number){
    this.personnelService.contrat(i).subscribe(
      data => {
        console.log(data)
        this.pdf = data.pdf
        window.location.href = this.api+'storage/'+this.pdf;
      },
      err => {
        console.log(err)
      }
    );
  }

}
