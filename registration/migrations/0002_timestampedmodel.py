# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-05-18 09:37
from __future__ import unicode_literals

from django.db import migrations
from django.utils import timezone
import django_extensions.db.fields


now = timezone.now()


class Migration(migrations.Migration):

    dependencies = [
        ('registration', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='betatestapplication',
            options={'get_latest_by': 'modified', 'ordering': ('-modified', '-created')},
        ),
        migrations.AddField(
            model_name='betatestapplication',
            name='created',
            field=django_extensions.db.fields.CreationDateTimeField(auto_now_add=True, default=now, verbose_name='created'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='betatestapplication',
            name='modified',
            field=django_extensions.db.fields.ModificationDateTimeField(auto_now=True, default=now, verbose_name='modified'),
            preserve_default=False,
        ),
    ]
