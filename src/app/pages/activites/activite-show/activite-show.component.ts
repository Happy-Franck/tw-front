import { Component, OnInit } from '@angular/core';
import { ActiviteService } from 'src/app/services/activite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-activite-show',
  templateUrl: './activite-show.component.html',
  styleUrls: ['./activite-show.component.css']
})
export class ActiviteShowComponent implements OnInit {

  activite: any
  api = environment.apiUrl;
  constructor(private activiteService: ActiviteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.activiteService.show(i).subscribe(
      data => {
        if(data.activite){
          this.activite = data.activite
        }
      }
    )
  }

}
