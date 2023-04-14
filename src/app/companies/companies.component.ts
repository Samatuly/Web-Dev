import {Component, OnInit} from '@angular/core';
import { CompaniesService } from "../companies.service";
import { Company } from "../models";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: Company[];

  constructor(private companyService: CompaniesService) {
    this.companies = [];
  }

  ngOnInit(){
    this.getAllCompanies()
  }

  getAllCompanies() {
    this.companyService.getCompanies().subscribe((data) => (this.companies = data));
  }
}
