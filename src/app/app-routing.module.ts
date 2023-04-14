import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent} from "./companies/companies.component";
import { HttpClientModule} from "@angular/common/http";
import { CompanyVacanciesComponent} from "./company-vacancies/company-vacancies.component";

const routes: Routes = [
  {path: '', component: CompaniesComponent},
  {path: 'companies/:id', component: CompanyVacanciesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
