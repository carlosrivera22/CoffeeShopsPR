# Generated by Django 2.2 on 2020-11-23 03:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee_app', '0002_coffeeshop_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='coffeeshop',
            name='website',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
