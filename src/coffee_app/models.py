from django.db import models

# Create your models here.
class CoffeeShop(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=360)
    image = models.ImageField(null=True)
    facebook = models.CharField(max_length=200,null=True)
    address = models.CharField(max_length=200,null=True)