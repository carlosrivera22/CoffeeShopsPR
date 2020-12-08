from rest_framework import viewsets
from .serializers import CoffeeShopSerializer, NewsletterSerializer
from ..models import CoffeeShop, Newsletter

class CoffeeShopViewSet(viewsets.ModelViewSet):
    queryset = CoffeeShop.objects.all()
    serializer_class = CoffeeShopSerializer

class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer

