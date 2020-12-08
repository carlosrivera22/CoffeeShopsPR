from .views import CoffeeShopViewSet, NewsletterViewSet, BookViewSet
from rest_framework import routers
from django.urls import path, include

app_name = 'api-coffee-shops'
router = routers.DefaultRouter()
router.register(r'coffee_shops', CoffeeShopViewSet)
router.register(r'newsletter', NewsletterViewSet)
router.register(r'books',BookViewSet)

urlpatterns = [
    path('', include(router.urls))
]
