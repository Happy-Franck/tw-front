import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class TechnologieService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<any>{
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.get<any>(API_URL + 'admin/technologie', {headers: header}).pipe();
  }

  create(nom: string, categorie_services_id: number, image_technologie:File): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_technologie', image_technologie)
    let params = new HttpParams().set('nom', nom).set('categorie_services_id',categorie_services_id);
    return this.http.post<any>(API_URL + 'admin/technologie', formData,  { headers: headers, params: params}).pipe();
  }

  show(i: number){
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/technologie/'+i, {headers: header}).pipe();
  }

  destroy(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.delete<any>(API_URL + 'admin/technologie/'+i, {headers: header}).pipe();
  }

  update(id:number, nom: string, categorie_services_id: number, image_technologie:File) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_technologie', image_technologie)
    let params = new HttpParams().set('nom', nom).set('categorie_services_id',categorie_services_id);
    return this.http.post<any>(API_URL + 'admin/technologie/'+id, formData,  { headers: headers, params: params}).pipe();
  }

}
