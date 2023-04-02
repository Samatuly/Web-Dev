from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from api.models import Product, Category
import json


def product_list(request):
    product_list = Product.objects.all()
    pr_json = [p.to_json() for p in product_list]
    return JsonResponse(pr_json, safe=False)


def product_detail(request, product_id):
    product_list = Product.objects.all()

    for i in product_list:
        if(i.id == product_id):
            return  JsonResponse(i.to_json())

    return JsonResponse({'error': 'Dont have this product'})


def category_list(request):
    category_list = Category.objects.all()
    pr_json = [p.to_json() for p in category_list]
    return JsonResponse(pr_json, safe=False)


def category_detail(request, category_id):
    category_list = Category.objects.all()

    for i in category_list:
        if(i.id == category_id):
            return  JsonResponse(i.to_json())

    return JsonResponse({'error': 'Dont have this category'})


def category_products(request, category_id):
    category_list = Category.objects.all()

    pr_json = [p.to_json() for p in Product.objects.all()]

    for i in category_list:
        if (i.id == category_id):
            return JsonResponse(pr_json, safe=False)

    return JsonResponse({'error': 'Dont have product in this category'})