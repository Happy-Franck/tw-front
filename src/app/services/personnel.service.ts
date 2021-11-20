import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  index(): Observable<any>{
      let header = new HttpHeaders();
      header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
      //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
      return this.http.get<any>(API_URL + 'admin/personnel', {headers: header}).pipe();
  }

  create(
    nom: string,
    prenom: string,
    cin: number,
    date_de_naissance: string,
    adresse: string,
    email: string,
    telephone: number,
    poste: string,
    salaire: number,
    debut_de_travail: string,
    photo_personnel:File
  ): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('photo_personnel', photo_personnel)
    let params = new HttpParams()
    .set('nom', nom)
    .set('prenom', prenom)
    .set('cin', cin)
    .set('date_de_naissance', date_de_naissance)
    .set('adresse', adresse)
    .set('email', email)
    .set('telephone',telephone )
    .set('poste',poste )
    .set('statut', 'activé' )
    .set('salaire', salaire)
    .set('debut_de_travail', debut_de_travail)
    return this.http.post<any>(API_URL + 'admin/personnel', formData,  { headers: headers, params: params}).pipe();
  }

  show(i: number){
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i, {headers: header}).pipe();
  }

  destroy(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.delete<any>(API_URL + 'admin/personnel/'+i, {headers: header}).pipe();
  }

  archiver(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i+'/archiver', {headers: header}).pipe();
  }

  desarchiver(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i+'/desarchiver', {headers: header}).pipe();
  }

  badge(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i+'/badge', {headers: header}).pipe();
  }

  attestation(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i+'/attestation-de-stage', {headers: header}).pipe();
  }

  contrat(i: number) {
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/personnel/'+i+'/contrat-de-travail', {headers: header}).pipe();
  }

  update(
    id:number,
    nom: string,
    prenom: string,
    cin: number,
    date_de_naissance: string,
    adresse: string,
    email: string,
    telephone: number,
    poste: string,
    salaire: number,
    debut_de_travail: string,
    photo_personnel:File
  ) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('photo_personnel', photo_personnel)
    let params = new HttpParams()
    .set('nom', nom)
    .set('prenom', prenom)
    .set('cin', cin)
    .set('date_de_naissance', date_de_naissance)
    .set('adresse', adresse)
    .set('email', email)
    .set('poste', poste)
    .set('telephone',telephone )
    .set('salaire', salaire)
    .set('debut_de_travail', debut_de_travail)
    return this.http.post<any>(API_URL + 'admin/personnel/'+id, formData,  { headers: headers, params: params}).pipe();
  }

}
