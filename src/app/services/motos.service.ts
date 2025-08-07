// src/app/services/motos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotosService {
  private apiUrl = 'https://gateway.supre.com.co/api/official-site/catalogo-de-motos/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/\'\'/precio:asc/?limit=12&offset=12'; // 🔁 Reemplaza por la URL real

  constructor(private http: HttpClient) {}

  getMotos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
