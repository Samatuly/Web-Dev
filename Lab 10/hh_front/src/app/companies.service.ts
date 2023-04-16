import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";
import {Observable} from "rxjs";
import {Company} from "./models";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies`);
  }
}
