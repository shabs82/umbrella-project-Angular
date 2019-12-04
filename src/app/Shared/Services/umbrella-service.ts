import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Umbrella} from '../Models/Umbrella';

@Injectable({
  providedIn: 'root'
})
export class UmbrellaService {
  apiUrl = 'https://localhost:44346/api/Umbrella';

  constructor(private http: HttpClient ) { }

  getAllUmbrellas(umb: Umbrella) {

  }
}
