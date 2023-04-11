from django.shortcuts import render
from django.http.response import JsonResponse
from django.forms import model_to_dict
from .models import Vacancy, Company
from . import models
import json

def companies_list(request):
    companies = Company.objects.all()
    companies_list = list(companies.values())
    return JsonResponse(companies_list, safe=False)

def company_detail(request, company_id):
    company = Company.objects.filter(id=company_id).first()
    company_dict = model_to_dict(company)
    return JsonResponse(company_dict)

def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancies_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    vacancies = Vacancy.objects.filter(id=vacancy_id)
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    top_ten = vacancies[:10]
    vacancies_json = [i.to_json() for i in top_ten]
    return JsonResponse(vacancies_json, safe=False)