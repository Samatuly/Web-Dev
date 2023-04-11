from django.contrib import admin
from api.models import Vacancy, Company

@admin.register(Company)
class AdminCompany(admin.ModelAdmin):
    list_display = ('id', 'name', 'city')

@admin.register(Vacancy)
class AdminVacancy(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary', 'company')