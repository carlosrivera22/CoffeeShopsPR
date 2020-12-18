from rest_framework import viewsets
from .serializers import CoffeeShopSerializer, NewsletterSerializer, BookSerializer
from ..models import CoffeeShop, Newsletter,Book
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class CoffeeShopViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = CoffeeShop.objects.all()
    serializer_class = CoffeeShopSerializer

class NewsletterViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer

class BookViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    

class CoffeeShopBooksViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    def get_queryset(self):
        shop_id = self.request.parser_context["kwargs"]["id"]
        shop = CoffeeShop.objects.filter(id=shop_id)
        books = Book.objects.filter(shop=shop[0])
        return books
                

        

    