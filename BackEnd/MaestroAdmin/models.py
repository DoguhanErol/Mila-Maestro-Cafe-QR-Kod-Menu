from django.db import models

# Create your models here.
# Gıt ve DRF uygulamasını kurup apı olustur


class Product(models.Model):
    MENU_CHOICES = (
        ('Soğuk İçecekler', 'Soğuk İçecekler'),
        ('Sıcak İçecekler', 'Sıcak İçecekler'),
        ('Kahvaltılıklar', 'Kahvaltılıklar'),
        ('Burgerler', 'Burgerler'),
        ('Aparatifler', 'Aparatifler'),
        ('Tatlılar', 'Tatlılar'),
        ('Nargileler', 'Nargileler'),
        ('Kampanyalar', 'Kampanyalar'),
    )

    ProductMenuName = models.CharField(
        max_length=30, choices=MENU_CHOICES, blank=False, null=False)
    ProductTitle = models.CharField(max_length=255, blank=False, null=False)
    ProductContent = models.TextField(blank=True, null=True)
    ProductPrice = models.IntegerField(blank=False, null=False)

    def __str__(self):
        return self.ProductMenuName + '  -  ' + self.ProductTitle
