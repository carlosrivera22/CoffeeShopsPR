from django.db import models

# Create your models here.
class CoffeeShop(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(max_length=360)
    image = models.ImageField(null=True)
    facebook = models.CharField(max_length=200,null=True)
    address = models.CharField(max_length=200,null=True)
    latitude = models.FloatField(null=True,blank=True)
    longitude = models.FloatField(null=True,blank=True)
    region = models.CharField(max_length=200, null=True)



class Book(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=360)
    image = models.ImageField()
    author = models.CharField(max_length=200)
    genre = models.CharField(max_length=200)
    shop = models.ForeignKey(CoffeeShop, on_delete=models.CASCADE)