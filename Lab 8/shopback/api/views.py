from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from django.forms import model_to_dict
from . import models


def product_list(request):
    products = models.Product.objects.all()
    products_list = list(products.values())
    return JsonResponse(products_list, safe=False)


def product_detail(request, id):
    product = models.Product.objects.filter(id=id).first()
    if product is None:
        return JsonResponse({'error': 'Product not found'}, status=404)

    # product_list = list(product.values())
    product_dict = model_to_dict(product)
    return JsonResponse(product_dict)


def category_list(request):
    categories = models.Category.objects.all()
    categories_list = list(categories.values())
    return JsonResponse(categories_list, safe=False)


def category_detail(request, id):
    category = models.Category.objects.filter(id=id).first()
    if category is None:
        return JsonResponse({'error': 'Category not found'}, status=404)

    category_dict = model_to_dict(category)
    return JsonResponse(category_dict)


def category_products(request, id):
    category = models.Category.objects.filter(id=id).first()
    if category is None:
        return JsonResponse({'error': 'Category not found'}, status=404)

    products = category.products.all()
    products_list = list(products.values())
    return JsonResponse(products_list, safe=False)