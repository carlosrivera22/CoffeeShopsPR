from .views import CoffeeShopViewSet, NewsletterViewSet, BookViewSet,CoffeeShopBooksViewSet
from rest_framework import routers
from django.urls import path, include

app_name = 'api-coffee-shops'
router = routers.DefaultRouter()
router.register(r'coffee_shops', CoffeeShopViewSet)
router.register(r'coffee_shops/(?P<id>\d+)', CoffeeShopViewSet)
router.register(r'newsletter', NewsletterViewSet)
router.register(r'books',BookViewSet)
router.register(r'books/(?P<id>\d+)',BookViewSet)
router.register(r'coffee_shop/(?P<id>\d+)/books',CoffeeShopBooksViewSet)

urlpatterns = [
    path('', include(router.urls))
]
