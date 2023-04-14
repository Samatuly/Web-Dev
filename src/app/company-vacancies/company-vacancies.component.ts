import {Component, OnInit} from '@angular/core';
import {VacanciesService} from "../vacancies.service";
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-vacancies',
  templateUrl: './company-vacancies.component.html',
  styleUrls: ['./company-vacancies.component.css']
})
export class CompanyVacanciesComponent implements OnInit{
  vacancies: Vacancy[];
  company_id:number

  constructor(
    private route: ActivatedRoute,
    private service: VacanciesService
  ) {
    this.vacancies = [];
    this.company_id = 0;
  }

  ngOnInit() {
    this.company_id = Number(this.route.snapshot.paramMap.get('id'));
    this.getVacancies(this.company_id)
  }

  getVacancies(id:number){
    this.service.getCompanyVacancies(id).subscribe((data) => {
      this.vacancies = data
      console.log(this.vacancies.length)
    })
  }
}
