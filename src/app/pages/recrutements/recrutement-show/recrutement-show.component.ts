import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecrutementService } from 'src/app/services/recrutement.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recrutement-show',
  templateUrl: './recrutement-show.component.html',
  styleUrls: ['./recrutement-show.component.css']
})
export class RecrutementShowComponent implements OnInit {

  api = environment.apiUrl;
  recrutement: any

  constructor(private route: ActivatedRoute, private recrutementService: RecrutementService) { }

  ngOnInit(): void {
    const i = this.route.snapshot.params['id'];
    this.recrutementService.show(i).subscribe(
      data => {
        if(data.recrutement){
          this.recrutement = data.recrutement
        }
      }
    )
  }

}
