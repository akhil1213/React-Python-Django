# Generated by Django 3.0.2 on 2020-01-18 16:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Lead',
            new_name='Course',
        ),
    ]