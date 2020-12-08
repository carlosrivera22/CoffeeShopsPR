from django.contrib import admin
from .models import CoffeeShop, Book, Newsletter

# Register your models here.
admin.site.register(CoffeeShop)
admin.site.register(Book)
admin.site.register(Newsletter)