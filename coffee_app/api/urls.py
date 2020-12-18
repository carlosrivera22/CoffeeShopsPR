from .views import CoffeeShopViewSet, NewsletterViewSet, BookViewSet,CoffeeShopBooksViewSet
from rest_framework import routers
from django.urls import path, include

app_name = 'api-coffee-shops'
router = routers.DefaultRouter()
router.register(r'coffee_shops')
router.register(r'coffee_shops/(?P<id>\d+)')
router.register(r'newsletter')
router.register(r'books')
router.register(r'books/(?P<id>\d+)')
router.register(r'coffee_shop/(?P<id>\d+)/books')

urlpatterns = [
    path('', include(router.urls))
]
