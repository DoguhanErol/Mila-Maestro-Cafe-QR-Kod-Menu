from django.urls import path
from . import views
urlpatterns = [
    path('all/', views.ProductAPIView.as_view(), name='product-list'),
    path('sogukicecekler/', views.SogukIceceklerAPIView.as_view(), name='sogukicecekler-api'),
    path('sicakicecekler/', views.SicakIceceklerAPIView.as_view(), name='sicakicecekler-api'),
    path('kahvaltiliklar/', views.KahvaltiliklarAPIView.as_view(), name='kahvaltiliklar-api'),
    path('burgerler/', views.BurgerlerAPIView.as_view(), name='burgerler-api'),
    path('aparatifler/', views.AparatiflerAPIView.as_view(), name='aparatifler-api'),
    path('tatlilar/', views.TatlilarAPIView.as_view(), name='tatlilar-api'),
    path('nargileler/', views.NargilelerAPIView.as_view(), name='nargileler-api'),
    path('kampanyalar/', views.KampanyalarAPIView.as_view(), name='kampanyalar-api'),

]