from ..models import CoffeeShop
from rest_framework import serializers

class CoffeeShopSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoffeeShop
        fields = '__all__'


