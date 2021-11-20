import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie-index',
  templateUrl: './categorie-index.component.html',
  styleUrls: ['./categorie-index.component.css']
})
export class CategorieIndexComponent implements OnInit {

  api = environment.apiUrl;
  categories: any
  msg: string
  constructor(private categorieService: CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.categorieService.index().subscribe(
      data => {
        if(data){
          console.log(data)
          this.categories = data.categorie_services
        }
        else{
          this.msg = "Aucun categorie"
        }
      },
      err => {
        console.log(err)
      }
    );
  }

  show(i: number){
    this.router.navigate(['/admin/services/categories/'+i]);
  }

  edit(i: number){
    this.router.navigate(['/admin/services/categories/edit/'+i]);
  }

  delete(i: number,index:number){
    this.categorieService.destroy(i).subscribe(
      data => {
        if(data.message){
          this.msg = data.message
          this.categories.splice(index,1)
          //this.categories.slice()
        }
      },
      err => {
        console.log(err)
      }
    );
  }

}
