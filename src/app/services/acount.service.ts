import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcountService {

  constructor(private http:HttpClient) { 

  }
  onLogin(obj:any):Observable <any>{
   return this.http.post('http://localhost:8080/auth/login',obj,{
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   });
  }
}
