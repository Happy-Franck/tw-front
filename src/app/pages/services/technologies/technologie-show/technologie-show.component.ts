
import { Component, OnInit } from '@angular/core';
import { TechnologieService } from 'src/app/services/technologie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-technologie-show',
  templateUrl: './technologie-show.component.html',
  styleUrls: ['./technologie-show.component.css']
})
export class TechnologieShowComponent implements OnInit {

  technologie: any
  categorie: any
  categorie_id: number
  technologies: any
  api = environment.apiUrl;

  constructor(private technologieService: TechnologieService,private categorieService: CategorieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.technologieService.show(i).subscribe(
      data => {
        console.log(data.services)
        this.technologie = data.technologie
        this.categorieService.show(this.technologie.categorie_services_id).subscribe(
          data => {
            this.categorie = data.categorie_service
          }
        )
      }
    )
  }

}
