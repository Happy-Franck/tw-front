import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DevService } from 'src/app/services/dev.service';

@Component({
  selector: 'app-dev-index',
  templateUrl: './dev-index.component.html',
  styleUrls: ['./dev-index.component.css']
})
export class DevIndexComponent implements OnInit {

  api = environment.apiUrl;
  devs: any
  msg: string
  constructor(private devService: DevService, private router: Router) { }

  ngOnInit(): void {
    this.devService.index().subscribe(
      data => {
        if(data){
          console.log(data)
          this.devs = data.services
        }
        else{
          this.msg = "Aucun service"
        }
      },
      err => {
        console.log(err)
      }
    );
  }
  show(i: number){
    this.router.navigate(['/admin/services/devs/'+i]);
  }

  edit(i: number){
    this.router.navigate(['/admin/services/devs/edit/'+i]);
  }

  delete(i: number,index:number){
    this.devService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.devs.splice(index,1)
          //this.devs.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }
}
