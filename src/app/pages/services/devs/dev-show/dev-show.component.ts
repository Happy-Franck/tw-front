import { Component, OnInit } from '@angular/core';
import { DevService } from 'src/app/services/dev.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-dev-show',
  templateUrl: './dev-show.component.html',
  styleUrls: ['./dev-show.component.css']
})
export class DevShowComponent implements OnInit {

  dev: any
  categorie: any
  categorie_id: number
  technologies: any
  api = environment.apiUrl;

  constructor(private devService: DevService,private categorieService: CategorieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.devService.show(i).subscribe(
      data => {
        console.log(data.services)
        this.dev = data.service
        this.categorieService.show(this.dev.categorie_services_id).subscribe(
          data => {
            this.categorie = data.categorie_service
          }
        )
      }
    )
  }

}
