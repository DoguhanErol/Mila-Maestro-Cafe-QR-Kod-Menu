# Generated by Django 4.2.5 on 2023-09-10 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ProductMenuName', models.CharField(choices=[('Soğuk İçecekler', 'Soğuk İçecekler'), ('Sıcak İçecekler', 'Sıcak İçecekler'), ('Kahvaltılıklar', 'Kahvaltılıklar'), ('Burgerler', 'Burgerler'), ('Aparatifler', 'Aparatifler'), ('Tatlılar', 'Tatlılar'), ('Nargileler', 'Nargileler'), ('Kampanyalar', 'Kampanyalar')], max_length=30)),
                ('ProductTitle', models.CharField(max_length=255)),
                ('ProductContent', models.TextField()),
                ('ProductPrice', models.IntegerField()),
            ],
        ),
    ]
