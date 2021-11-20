import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<any>{
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.get<any>(API_URL + 'admin/categorie_service', {headers: header}).pipe();
  }

  create(type_service: string, image_categorie_service:File): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_categorie_service', image_categorie_service)
    let params = new HttpParams().set('type_service', type_service);
    return this.http.post<any>(API_URL + 'admin/categorie_service', formData,  { headers: headers, params: params}).pipe();
  }

  show(i: number){
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/categorie_service/'+i, {headers: header}).pipe();
  }

  destroy(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.delete<any>(API_URL + 'admin/categorie_service/'+i, {headers: header}).pipe();
  }

  update(id:number, type_service: string, image_categorie_service:File) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('image_categorie_service', image_categorie_service)
    let params = new HttpParams().set('type_service', type_service);
    return this.http.post<any>(API_URL + 'admin/categorie_service/'+id, formData,  { headers: headers, params: params}).pipe();
  }

}
