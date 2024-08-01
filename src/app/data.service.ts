import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _HttpClient: HttpClient) { }

  getdata(): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940`,
      {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2FhNzYxZmQwMWJlOTM5YTFhNjk0NDk2YTJhNzVjMCIsInN1YiI6IjY1Y2Q4ZDYxZDdkY2QyMDE3YzFlNzA3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pJsiATUCZRu0fZ-_3dIdqCVJwSBviXGmX5EVgJgKlYQ'
        }
      })
  }





}

