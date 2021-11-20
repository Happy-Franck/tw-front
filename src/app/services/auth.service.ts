import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class AuthService{

    isAuth(): boolean{
        return !!localStorage.getItem('token')
    }

    user(): Observable<any>{
        let header = new HttpHeaders();
        header = header.append('Authorization', 'Bearer ' + this.getToken());
        //header = header.append('Authorization', 'Bearer ' + JSON.parse(localStorage["token"]));
        return this.http.get<any>(API_URL + 'admin/profil', {headers: header}).pipe();
    }

    constructor(private http: HttpClient){
    }

    login(email: string , password: string): Observable<any>{/*
        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
        })*/
        let params = new HttpParams().set('email', email).set('password', password);
        return this.http.post<any>(API_URL + 'login', params); //{headers:headers}
    }

    logout(): Observable<any>{
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + this.getToken());
        return this.http.post<any>(API_URL + 'admin/logout', {}, {headers:headers});
    }

    creerSession(token:string,user:any) {
        localStorage.setItem('tokenbali', token);
        localStorage.setItem('token', JSON.stringify(token));
        localStorage.setItem('user', JSON.stringify(user));
    }

    getToken() {
        if(localStorage.getItem('token')){
            return JSON.parse(localStorage["token"]);
        }else{
            return "Vous n'êtes pas connecté";
        }
    }

    getUser() {
        if(localStorage.getItem('user')){
            return JSON.parse(localStorage["user"]);
        }else{
            return "Vous n'êtes pas connecté";
        }
    }

}
