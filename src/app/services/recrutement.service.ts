import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


const API_URL = environment.apiUrl;
@Injectable({
    providedIn: 'root',
})
export class RecrutementService{

    constructor(private http: HttpClient, private authService: AuthService) { }

    index(): Observable<any>{
        let header = new HttpHeaders();
        header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
        //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
        return this.http.get<any>(API_URL + 'admin/recrutement', {headers: header}).pipe();
    }

    create(poste: string, profil: string, duree: number, technologies: string, image_recrutement:File): Observable<any>{
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      let params = new HttpParams()
      .set('poste', poste)
      .set('profil', profil)
      .set('duree', duree)
      .set('technologies', technologies)
      let formData = new FormData()
      formData.append('image_recrutement', image_recrutement)
      return this.http.post<any>(API_URL + 'admin/recrutement', formData,  { headers: headers, params: params}).pipe();
    }

    show(i: number){
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.get<any>(API_URL + 'admin/recrutement/'+i, {headers: header}).pipe();
    }

    destroy(i: number) {
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.delete<any>(API_URL + 'admin/recrutement/'+i, {headers: header}).pipe();
    }

    update(id:number, poste: string, profil: string, duree: number, technologies: string, image_recrutement:File) {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      //let params = new HttpParams().set('nom', nom).set('url', url);
      let params = new HttpParams()
      .set('poste', poste)
      .set('profil', profil)
      .set('duree', duree)
      .set('technologies', technologies);
      let formData = new FormData()
      formData.append('image_recrutement', image_recrutement)
      return this.http.post<any>(API_URL + 'admin/recrutement/'+id, formData,  { headers: headers, params: params}).pipe();
    }

}
