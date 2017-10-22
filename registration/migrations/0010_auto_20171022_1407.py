# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2017-10-22 14:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0009_auto_20171020_2146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='betatestapplication',
            name='favicon',
            field=models.ImageField(default='opencraft_favicon.ico', help_text="This is used as the browser tab icon for your instance's pages. If unset, OpenCraft's icon will be used.", null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='betatestapplication',
            name='logo',
            field=models.ImageField(default='opencraft_logo_small.png', help_text="Your branding to be displayed throughout your instance. It should be 70px tall. If unset, OpenCraft's logo will be used.", null=True, upload_to=''),
        ),
    ]
