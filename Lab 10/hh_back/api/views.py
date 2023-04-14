from django.shortcuts import render
from django.http.response import JsonResponse
from django.forms import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from .serializers import vacancySerializer, companySerializer
from .models import Vacancy, Company
from . import models
import json

@csrf_exempt
def companies_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = companySerializer(companies, many = True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        print(data.get('name', ''))
        company = Company.objects.create(
            name = data.get('name', ''),
            description = data.get('description',''),
            city = data.get('city',''),
            address = data.get('address','')
            )
        serializer = companySerializer(company, many = False)
        return JsonResponse(serializer.data)


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        company_json = company.to_json()
    except:
        return JsonResponse({'error': "Don't find id"})

    if request.method == 'GET':
        return JsonResponse(company_json)

    elif request.method == 'PUT':
        data = json.loads(request.body)
        print(data)

        name = data.get('name', '')
        description = data.get('description', '')
        city = data.get('city', '')
        address = data.get('address', '')

        company.name = name
        company.description = description
        company.city = city
        company.address = address
        company.save()

        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'delete': True})

def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    vacancies_json = [i.to_json() for i in vacancies]
    return JsonResponse(vacancies_json, safe=False)

class vacancies_list(APIView):
    def get(self, request):
        vacansies = Vacancy.objects.all()
        serializer = vacancySerializer(vacansies, many = True)
        return JsonResponse(serializer.data, safe=False)
    def post(self, request):
        data = json.loads(request.body)
        company = Vacancy.objects.create(
            name = data.get('name', ''),
            description = data.get('description',''),
            salary = data.get('salary',''),
            company_id = data.get('company','')
            )
        serializer = vacancySerializer(company, many = False)
        return JsonResponse(serializer.data)


class vacancy_detail(APIView):

    def get(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        serialazer = vacancySerializer(vacancy, many=False)
        return JsonResponse(serialazer.data, safe=False)

    def delete(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        vacancy.delete()
        return JsonResponse({"delete": "succesful"})

    def put(self, request, vacancy_id):
        try:
            vacancy = Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return JsonResponse({"error": str(e)})

        data = json.loads(request.body)

        name = data.get('name', '')
        description = data.get('description', '')
        salary = data.get('salary', '')
        company = data.get('company', '')

        vacancy.name = name
        vacancy.description = description
        vacancy.salary = salary
        vacancy.company_id = company
        vacancy.save()

        serializer = vacancySerializer(vacancy, many=False)

        return JsonResponse(serializer.data)

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')
    top_ten = vacancies[:10]
    vacancies_json = [i.to_json() for i in top_ten]
    return JsonResponse(vacancies_json, safe=False)