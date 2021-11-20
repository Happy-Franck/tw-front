import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonnelService } from 'src/app/services/personnel.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-personnel-show',
  templateUrl: './personnel-show.component.html',
  styleUrls: ['./personnel-show.component.css']
})
export class PersonnelShowComponent implements OnInit {

  pdf: any
  personnel: any
  api = environment.apiUrl;
  constructor(private personnelService: PersonnelService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.personnelService.show(i).subscribe(
      data => {
        if(data.personnel){
          this.personnel = data.personnel
        }
      }
    )
  }

  active():any{
    if(this.personnel.statut == 'activé'){
      return true;
    }
    return false;
  }

  desactive():any{
    if(this.personnel.statut == 'désactivé'){
      return true;
    }
    return false;
  }

  archiver(i: number){
    this.personnelService.archiver(i).subscribe(
      data => {
        console.log(data.msg)
        this.router.navigate(['/admin/personnels'])
      },
      err => {
        console.log(err)
      }
    );
  }

  desarchiver(i: number){
    this.personnelService.desarchiver(i).subscribe(
      data => {
        console.log(data.msg)
        this.router.navigate(['/admin/personnels'])
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
