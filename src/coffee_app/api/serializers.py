from ..models import CoffeeShop, Newsletter
from rest_framework import serializers

class CoffeeShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeShop
        fields = '__all__'


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'

    