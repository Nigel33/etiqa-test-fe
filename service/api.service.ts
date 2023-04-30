import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly ROOT_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public get(endpoint: string) {
    const url = `${this.ROOT_URL}/${endpoint}`;
    return this.http.get(url);
  }

  public post(endpoint: string, body: any) {
    const url = `${this.ROOT_URL}/${endpoint}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, body, { headers });
  }

  public put(endpoint: string, body: any) {
    const url = `${this.ROOT_URL}/${endpoint}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put(url, body, { headers });
  }

  public delete(endpoint: string) {
    const url = `${this.ROOT_URL}/${endpoint}`;
    return this.http.delete(url);
  }
}
