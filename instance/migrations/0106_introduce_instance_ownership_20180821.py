# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2018-08-21 16:05
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0003_introduce_organizations'),
        ('instance', '0105_remove_ephemeral_databases'),
    ]

    operations = [
        migrations.AddField(
            model_name='instancereference',
            name='creator',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='userprofile.UserProfile'),
        ),
        migrations.AddField(
            model_name='instancereference',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='userprofile.Organization'),
        ),
    ]
