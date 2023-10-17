from rest_framework.views import APIView
from rest_framework.response import Response
from MaestroAdmin.models import Product
from .serializers import ProductSerializer

class ProductAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class SogukIceceklerAPIView(APIView):
    def get(self, request):
        soguk_icecekler = Product.objects.filter(ProductMenuName='Soğuk İçecekler')
        serializer = ProductSerializer(soguk_icecekler, many=True)
        return Response(serializer.data)

class SicakIceceklerAPIView(APIView):
    def get(self, request):
        sicak_icecekler = Product.objects.filter(ProductMenuName='Sıcak İçecekler')
        serializer = ProductSerializer(sicak_icecekler, many=True)
        return Response(serializer.data)

class KahvaltiliklarAPIView(APIView):
    def get(self, request):
        kahvaltiliklar = Product.objects.filter(ProductMenuName='Kahvaltılıklar')
        serializer = ProductSerializer(kahvaltiliklar, many=True)
        return Response(serializer.data)

class BurgerlerAPIView(APIView):
    def get(self, request):
        burgerler = Product.objects.filter(ProductMenuName='Burgerler')
        serializer = ProductSerializer(burgerler, many=True)
        return Response(serializer.data)
        
class AparatiflerAPIView(APIView):
    def get(self, request):
        aparatifler = Product.objects.filter(ProductMenuName='Aparatifler')
        serializer = ProductSerializer(aparatifler, many=True)
        return Response(serializer.data)

class TatlilarAPIView(APIView):
    def get(self, request):
        tatlılar = Product.objects.filter(ProductMenuName='Tatlılar')
        serializer = ProductSerializer(tatlılar, many=True)
        return Response(serializer.data)

class NargilelerAPIView(APIView):
    def get(self, request):
        nargileler = Product.objects.filter(ProductMenuName='Nargileler')
        serializer = ProductSerializer(nargileler, many=True)
        return Response(serializer.data)

class KampanyalarAPIView(APIView):
    def get(self, request):
        kampanyalar = Product.objects.filter(ProductMenuName='Kampanyalar')
        serializer = ProductSerializer(kampanyalar, many=True)
        return Response(serializer.data)