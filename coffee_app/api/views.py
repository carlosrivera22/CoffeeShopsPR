from rest_framework import viewsets
from .serializers import CoffeeShopSerializer, NewsletterSerializer, BookSerializer
from ..models import CoffeeShop, Newsletter,Book
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required

@login_required
class CoffeeShopViewSet(viewsets.ModelViewSet):
    queryset = CoffeeShop.objects.all()
    serializer_class = CoffeeShopSerializer

@login_required
class NewsletterViewSet(viewsets.ModelViewSet):
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer

@login_required
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
@login_required
class CoffeeShopBooksViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    def get_queryset(self):
        shop_id = self.request.parser_context["kwargs"]["id"]
        shop = CoffeeShop.objects.filter(id=shop_id)
        books = Book.objects.filter(shop=shop[0])
        return books
                

        

    