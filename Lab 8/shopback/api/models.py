from django.db import models

class Product(models.Model):
    name = models.CharField(max_length = 100)
    price = models.FloatField()
    description = models.TextField(default = '')
    count = models.IntegerField()
    is_active = models.BooleanField(default = False)

    def __str__(self):
        return self.name, self.price

class Category(models.Model):
    name = models.CharField(max_length = 100)

    def __str__(self):
        return self.name

