from rest_framework import viewsets
from .serializers import CoffeeShopSerializer
from ..models import CoffeeShop

class CoffeeShopViewSet(viewsets.ModelViewSet):
    queryset = CoffeeShop.objects.all()
    serializer_class = CoffeeShopSerializer
