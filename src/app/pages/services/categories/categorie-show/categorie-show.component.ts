import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorie-show',
  templateUrl: './categorie-show.component.html',
  styleUrls: ['./categorie-show.component.css']
})
export class CategorieShowComponent implements OnInit {

  categorie: any
  services: any
  technologies: any
  api = environment.apiUrl;

  constructor(private categorieService: CategorieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.categorieService.show(i).subscribe(
      data => {
        console.log(data)
        this.categorie = data.categorie_service
        this.services = data.services
        this.technologies = data.technologies
      }
    )
  }

}
