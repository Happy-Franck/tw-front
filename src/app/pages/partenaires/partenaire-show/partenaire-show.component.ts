import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-partenaire-show',
  templateUrl: './partenaire-show.component.html',
  styleUrls: ['./partenaire-show.component.css']
})
export class PartenaireShowComponent implements OnInit {
  partenaire: any
  api = environment.apiUrl;
  constructor(private partenaireService: PartenaireService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.partenaireService.show(i).subscribe(
      data => {
        if(data.partenaire){
          this.partenaire = data.partenaire
        }
      }
    )
  }

}
