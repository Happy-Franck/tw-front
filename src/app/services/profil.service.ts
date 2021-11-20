import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  showProfil(){
    let header = new HttpHeaders();
    header = header.append('Authorization', 'Bearer ' + this.authService.getToken());
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    return this.http.get<any>(API_URL + 'admin/profil', {headers: header}).pipe();
  }
  updateProfil(
    nom_entreprise: string,
    adresse_siege_social: string,
    gerant: string,
    debut_d_activite: string,
    telephone: number,
    numero_rcs: number,
    mail_de_contact: string,
    email: string,
    password: string,
    logo:File
    ) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.authService.getToken());
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    //headers = headers.append('enctype', 'multipart/form-data');
    //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
    //let params = new HttpParams().set('nom', nom).set('url', url);
    let formData = new FormData()
    formData.append('logo', logo)
    let params = new HttpParams()
    .set('nom_entreprise', nom_entreprise)
    .set('adresse_siege_social',adresse_siege_social)
    .set('gerant',gerant)
    .set('debut_d_activite',debut_d_activite)
    .set('telephone',telephone)
    .set('numero_rcs',numero_rcs)
    .set('mail_de_contact',mail_de_contact)
    .set('email',email)
    .set('password',password)
    ;
    return this.http.post<any>(API_URL + 'admin/profil', formData,  { headers: headers, params: params}).pipe();
  }
}
