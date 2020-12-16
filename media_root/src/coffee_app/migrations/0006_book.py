# Generated by Django 2.2 on 2020-11-24 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coffee_app', '0005_auto_20201123_2224'),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField(max_length=360)),
                ('image', models.ImageField(upload_to='')),
                ('author', models.CharField(max_length=200)),
                ('subject', models.CharField(max_length=200)),
                ('genre', models.CharField(max_length=200)),
            ],
        ),
    ]