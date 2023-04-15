import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getCompanyVacancies(company_id:number):Observable<Vacancy[]>{
    return this.http.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies`
    )
  }
}
