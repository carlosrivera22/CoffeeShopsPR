from ..models import CoffeeShop, Newsletter,Book
from rest_framework import serializers

class CoffeeShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeShop
        fields = '__all__'


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    shop = CoffeeShopSerializer(many=False,read_only=True)
    shop_id = serializers.IntegerField(write_only=True)
    class Meta:
        model = Book
        fields = '__all__'
    