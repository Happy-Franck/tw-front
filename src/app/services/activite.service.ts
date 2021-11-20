import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<any>{
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.get<any>(API_URL + 'admin/activite', {headers: header}).pipe();
  }

  create(titre: string, description: string, lieu:string, date: string, image_activite: File): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_activite', image_activite)
    let params = new HttpParams().set('titre', titre).set('description', description).set('lieu', lieu).set('date', date);
    return this.http.post<any>(API_URL + 'admin/activite', formData,  { headers: headers, params: params}).pipe();
  }

  show(i: number){
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/activite/'+i, {headers: header}).pipe();
  }

  destroy(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.delete<any>(API_URL + 'admin/activite/'+i, {headers: header}).pipe();
  }

  update(id:number, titre: string, description: string, lieu:string, date: string, image_activite: File) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_activite', image_activite)
    let params = new HttpParams().set('titre', titre).set('description', description).set('lieu', lieu).set('date', date);
    return this.http.post<any>(API_URL + 'admin/activite/'+id, formData,  { headers: headers, params: params}).pipe();
  }

}
